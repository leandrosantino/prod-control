import { copyFileSync as copyFile, mkdirSync as mkdir, existsSync, writeFileSync } from 'fs'
import { exec, ExecOptions } from 'child_process'
import path from 'path';
import ncp from 'ncp'
import { rimrafSync as rmdir } from 'rimraf'
import packageJson from './package.json'
import configJson from './server/config.json'

const output = path.join(__dirname, '../app')

const paterns = {
  output,
  dir: [
    { from: path.join(__dirname, 'build'), to: path.join(output, 'build') },
    { from: path.join(__dirname, 'prisma'), to: path.resolve(output, 'prisma') },
    // { from: path.join(__dirname, 'database', 'client'), to: path.join(output, 'database', 'client') },
  ],
  file: [
    { from: path.join(__dirname, 'build/server/index.js',), to: path.join(output, 'build/index.js') },
    { from: path.join(__dirname, 'prisma/update.ts',), to: path.join(output, 'update.ts') },
    { from: path.join(__dirname, '.env',), to: path.join(output, '.env') },
  ]
};

(async () => {

  await shell('npm run react.build')

  console.log('- Clear output dir \n')
  rmdir(path.join(paterns.output, 'build'))
  mkdir(path.join(paterns.output, 'build'))


  await copyDir(paterns.dir[0].from, paterns.dir[0].to)

  await shell('npm run server.build')

  for (let file of paterns.file) {
    copyFile(file.from, file.to)
  }

  await copyDir(paterns.dir[1].from, paterns.dir[1].to)
  // await copyDir(paterns.dir[2].from, paterns.dir[2].to)

  createPackageJson()
  createConfgJson()

  await shell('npm i', {
    cwd: paterns.output
  })

  await shell('npm run db.migrate', {
    cwd: paterns.output
  })

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
