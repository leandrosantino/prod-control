import { copyFileSync as copyFile, mkdirSync as mkdir, existsSync, writeFileSync } from 'fs'
import { exec, ExecOptions } from 'child_process'
import path from 'path';
import ncp from 'ncp'
import { rimrafSync as rmdir } from 'rimraf'
import packageJson from './package.json'
import configJson from './server/config.json'
import appInfo from './app.info.json'
const isDev = /development/.test(String(process.env.NODE_ENV))

const version = Number((appInfo.version + 0.1).toFixed(2))

if (!isDev) {
  appInfo.version = version
  writeFileSync(path.join(__dirname, './app.info.json'), JSON.stringify(appInfo, null, 4))
}

const output = path.join(__dirname, `./dist/ProdControl-v${version}`)

const paterns = {
  dir: [
    { from: path.join(__dirname, 'build'), to: path.join(output, 'build') },
    { from: path.join(__dirname, 'prisma'), to: path.resolve(output, 'prisma') },
  ],
  file: [
    { from: path.join(__dirname, 'build/index.js',), to: path.join(output, 'build/index.js') },
  ]
};

(async () => {

  await shell('npm run react.build')

  console.log('- Clear output dir \n')
  if (existsSync(output)) {
    rmdir(output)
  }
  mkdir(output)
  mkdir(path.join(output, 'build'))

  await copyDir(paterns.dir[0].from, paterns.dir[0].to)

  await shell('npm run server.build')

  for (let file of paterns.file) {
    copyFile(file.from, file.to)
  }

  await copyDir(paterns.dir[1].from, paterns.dir[1].to)

  createPackageJson()
  createConfgJson()

  if (!isDev) {
    await shell('npm i', {
      cwd: output
    })

    await shell('npm run db.migrate', {
      cwd: output
    })
  }

})()


function createPackageJson() {
  packageJson.scripts.server = 'node build/index'
  writeFileSync(path.join(output, './package.json'), JSON.stringify(packageJson, null, 4))
}

function createConfgJson() {
  configJson.port = 3333
  configJson.report_path = 'Y:/Sistema de Apontamento de Produção'
  configJson.isDev = false
  writeFileSync(path.join(output, 'build/config.json'), JSON.stringify(configJson, null, 4))
}

function shell(command: string, options?: ExecOptions) {
  console.log(`- Exec: ${command} \n`)
  return new Promise<void>((resolve, reject) => {
    const process = exec(command, options, (err) => {
      if (err) {
        reject(err)
        return
      }
      resolve()
    })
    process.stdout?.on('data', console.log)
    process.stderr?.on('data', console.error)
  })
}

function copyDir(from: string, to: string) {
  console.log(`- Copy from ${path.basename(from)} to ${path.basename(to)} \n`)
  return new Promise<void>((resolve, reject) => {
    ncp(from, to, (err) => {
      if (err) {
        reject(err)
        return
      }
      resolve()
    })
  })
}
