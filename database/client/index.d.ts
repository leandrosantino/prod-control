
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model Product
 * 
 */
export type Product = {
  id: string
  description: string
  technicalDescription: string
  ute: string
  classification: string
  partNumber: string
  sapCode: string
  projectNumber: string
  amount: number
}

/**
 * Model ProductionRecord
 * 
 */
export type ProductionRecord = {
  id: string
  createdAt: Date
  productId: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<GlobalReject>;

  /**
   * `prisma.productionRecord`: Exposes CRUD operations for the **ProductionRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductionRecords
    * const productionRecords = await prisma.productionRecord.findMany()
    * ```
    */
  get productionRecord(): Prisma.ProductionRecordDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.13.0
   * Query Engine version: 1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Product: 'Product',
    ProductionRecord: 'ProductionRecord'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductCountOutputType
   */


  export type ProductCountOutputType = {
    ProductionRecord: number
  }

  export type ProductCountOutputTypeSelect = {
    ProductionRecord?: boolean
  }

  export type ProductCountOutputTypeGetPayload<S extends boolean | null | undefined | ProductCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProductCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ProductCountOutputTypeArgs)
    ? ProductCountOutputType 
    : S extends { select: any } & (ProductCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProductCountOutputType ? ProductCountOutputType[P] : never
  } 
      : ProductCountOutputType




  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Product
   */


  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    amount: number | null
  }

  export type ProductSumAggregateOutputType = {
    amount: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    description: string | null
    technicalDescription: string | null
    ute: string | null
    classification: string | null
    partNumber: string | null
    sapCode: string | null
    projectNumber: string | null
    amount: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    description: string | null
    technicalDescription: string | null
    ute: string | null
    classification: string | null
    partNumber: string | null
    sapCode: string | null
    projectNumber: string | null
    amount: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    description: number
    technicalDescription: number
    ute: number
    classification: number
    partNumber: number
    sapCode: number
    projectNumber: number
    amount: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    amount?: true
  }

  export type ProductSumAggregateInputType = {
    amount?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    description?: true
    technicalDescription?: true
    ute?: true
    classification?: true
    partNumber?: true
    sapCode?: true
    projectNumber?: true
    amount?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    description?: true
    technicalDescription?: true
    ute?: true
    classification?: true
    partNumber?: true
    sapCode?: true
    projectNumber?: true
    amount?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    description?: true
    technicalDescription?: true
    ute?: true
    classification?: true
    partNumber?: true
    sapCode?: true
    projectNumber?: true
    amount?: true
    _all?: true
  }

  export type ProductAggregateArgs = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs = {
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithAggregationInput>
    by: ProductScalarFieldEnum[]
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }


  export type ProductGroupByOutputType = {
    id: string
    description: string
    technicalDescription: string
    ute: string
    classification: string
    partNumber: string
    sapCode: string
    projectNumber: string
    amount: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect = {
    id?: boolean
    description?: boolean
    technicalDescription?: boolean
    ute?: boolean
    classification?: boolean
    partNumber?: boolean
    sapCode?: boolean
    projectNumber?: boolean
    amount?: boolean
    ProductionRecord?: boolean | Product$ProductionRecordArgs
    _count?: boolean | ProductCountOutputTypeArgs
  }


  export type ProductInclude = {
    ProductionRecord?: boolean | Product$ProductionRecordArgs
    _count?: boolean | ProductCountOutputTypeArgs
  }

  export type ProductGetPayload<S extends boolean | null | undefined | ProductArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Product :
    S extends undefined ? never :
    S extends { include: any } & (ProductArgs | ProductFindManyArgs)
    ? Product  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'ProductionRecord' ? Array < ProductionRecordGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProductCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ProductArgs | ProductFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'ProductionRecord' ? Array < ProductionRecordGetPayload<S['select'][P]>>  :
        P extends '_count' ? ProductCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Product ? Product[P] : never
  } 
      : Product


  type ProductCountArgs = 
    Omit<ProductFindManyArgs, 'select' | 'include'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Product'> extends True ? Prisma__ProductClient<ProductGetPayload<T>> : Prisma__ProductClient<ProductGetPayload<T> | null, null>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Product'> extends True ? Prisma__ProductClient<ProductGetPayload<T>> : Prisma__ProductClient<ProductGetPayload<T> | null, null>

    /**
     * Find the first Product that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs>(
      args?: SelectSubset<T, ProductFindManyArgs>
    ): Prisma.PrismaPromise<Array<ProductGetPayload<T>>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs>(
      args: SelectSubset<T, ProductCreateArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs>(
      args: SelectSubset<T, ProductDeleteArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs>(
      args: SelectSubset<T, ProductUpdateArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs>(
      args?: SelectSubset<T, ProductDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs>(
      args: SelectSubset<T, ProductUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs>(
      args: SelectSubset<T, ProductUpsertArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    ProductionRecord<T extends Product$ProductionRecordArgs= {}>(args?: Subset<T, Product$ProductionRecordArgs>): Prisma.PrismaPromise<Array<ProductionRecordGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Product base type for findUnique actions
   */
  export type ProductFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUnique
   */
  export interface ProductFindUniqueArgs extends ProductFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product base type for findFirst actions
   */
  export type ProductFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: Enumerable<ProductScalarFieldEnum>
  }

  /**
   * Product findFirst
   */
  export interface ProductFindFirstArgs extends ProductFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product create
   */
  export type ProductCreateArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }


  /**
   * Product.ProductionRecord
   */
  export type Product$ProductionRecordArgs = {
    /**
     * Select specific fields to fetch from the ProductionRecord
     */
    select?: ProductionRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductionRecordInclude | null
    where?: ProductionRecordWhereInput
    orderBy?: Enumerable<ProductionRecordOrderByWithRelationInput>
    cursor?: ProductionRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProductionRecordScalarFieldEnum>
  }


  /**
   * Product without action
   */
  export type ProductArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
  }



  /**
   * Model ProductionRecord
   */


  export type AggregateProductionRecord = {
    _count: ProductionRecordCountAggregateOutputType | null
    _min: ProductionRecordMinAggregateOutputType | null
    _max: ProductionRecordMaxAggregateOutputType | null
  }

  export type ProductionRecordMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    productId: string | null
  }

  export type ProductionRecordMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    productId: string | null
  }

  export type ProductionRecordCountAggregateOutputType = {
    id: number
    createdAt: number
    productId: number
    _all: number
  }


  export type ProductionRecordMinAggregateInputType = {
    id?: true
    createdAt?: true
    productId?: true
  }

  export type ProductionRecordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    productId?: true
  }

  export type ProductionRecordCountAggregateInputType = {
    id?: true
    createdAt?: true
    productId?: true
    _all?: true
  }

  export type ProductionRecordAggregateArgs = {
    /**
     * Filter which ProductionRecord to aggregate.
     */
    where?: ProductionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionRecords to fetch.
     */
    orderBy?: Enumerable<ProductionRecordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductionRecords
    **/
    _count?: true | ProductionRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductionRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductionRecordMaxAggregateInputType
  }

  export type GetProductionRecordAggregateType<T extends ProductionRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateProductionRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductionRecord[P]>
      : GetScalarType<T[P], AggregateProductionRecord[P]>
  }




  export type ProductionRecordGroupByArgs = {
    where?: ProductionRecordWhereInput
    orderBy?: Enumerable<ProductionRecordOrderByWithAggregationInput>
    by: ProductionRecordScalarFieldEnum[]
    having?: ProductionRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductionRecordCountAggregateInputType | true
    _min?: ProductionRecordMinAggregateInputType
    _max?: ProductionRecordMaxAggregateInputType
  }


  export type ProductionRecordGroupByOutputType = {
    id: string
    createdAt: Date
    productId: string
    _count: ProductionRecordCountAggregateOutputType | null
    _min: ProductionRecordMinAggregateOutputType | null
    _max: ProductionRecordMaxAggregateOutputType | null
  }

  type GetProductionRecordGroupByPayload<T extends ProductionRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProductionRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductionRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductionRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ProductionRecordGroupByOutputType[P]>
        }
      >
    >


  export type ProductionRecordSelect = {
    id?: boolean
    createdAt?: boolean
    productId?: boolean
    product?: boolean | ProductArgs
  }


  export type ProductionRecordInclude = {
    product?: boolean | ProductArgs
  }

  export type ProductionRecordGetPayload<S extends boolean | null | undefined | ProductionRecordArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProductionRecord :
    S extends undefined ? never :
    S extends { include: any } & (ProductionRecordArgs | ProductionRecordFindManyArgs)
    ? ProductionRecord  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'product' ? ProductGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ProductionRecordArgs | ProductionRecordFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'product' ? ProductGetPayload<S['select'][P]> :  P extends keyof ProductionRecord ? ProductionRecord[P] : never
  } 
      : ProductionRecord


  type ProductionRecordCountArgs = 
    Omit<ProductionRecordFindManyArgs, 'select' | 'include'> & {
      select?: ProductionRecordCountAggregateInputType | true
    }

  export interface ProductionRecordDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ProductionRecord that matches the filter.
     * @param {ProductionRecordFindUniqueArgs} args - Arguments to find a ProductionRecord
     * @example
     * // Get one ProductionRecord
     * const productionRecord = await prisma.productionRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductionRecordFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductionRecordFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ProductionRecord'> extends True ? Prisma__ProductionRecordClient<ProductionRecordGetPayload<T>> : Prisma__ProductionRecordClient<ProductionRecordGetPayload<T> | null, null>

    /**
     * Find one ProductionRecord that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductionRecordFindUniqueOrThrowArgs} args - Arguments to find a ProductionRecord
     * @example
     * // Get one ProductionRecord
     * const productionRecord = await prisma.productionRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductionRecordFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProductionRecordFindUniqueOrThrowArgs>
    ): Prisma__ProductionRecordClient<ProductionRecordGetPayload<T>>

    /**
     * Find the first ProductionRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionRecordFindFirstArgs} args - Arguments to find a ProductionRecord
     * @example
     * // Get one ProductionRecord
     * const productionRecord = await prisma.productionRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductionRecordFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductionRecordFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ProductionRecord'> extends True ? Prisma__ProductionRecordClient<ProductionRecordGetPayload<T>> : Prisma__ProductionRecordClient<ProductionRecordGetPayload<T> | null, null>

    /**
     * Find the first ProductionRecord that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionRecordFindFirstOrThrowArgs} args - Arguments to find a ProductionRecord
     * @example
     * // Get one ProductionRecord
     * const productionRecord = await prisma.productionRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductionRecordFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductionRecordFindFirstOrThrowArgs>
    ): Prisma__ProductionRecordClient<ProductionRecordGetPayload<T>>

    /**
     * Find zero or more ProductionRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionRecordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductionRecords
     * const productionRecords = await prisma.productionRecord.findMany()
     * 
     * // Get first 10 ProductionRecords
     * const productionRecords = await prisma.productionRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productionRecordWithIdOnly = await prisma.productionRecord.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductionRecordFindManyArgs>(
      args?: SelectSubset<T, ProductionRecordFindManyArgs>
    ): Prisma.PrismaPromise<Array<ProductionRecordGetPayload<T>>>

    /**
     * Create a ProductionRecord.
     * @param {ProductionRecordCreateArgs} args - Arguments to create a ProductionRecord.
     * @example
     * // Create one ProductionRecord
     * const ProductionRecord = await prisma.productionRecord.create({
     *   data: {
     *     // ... data to create a ProductionRecord
     *   }
     * })
     * 
    **/
    create<T extends ProductionRecordCreateArgs>(
      args: SelectSubset<T, ProductionRecordCreateArgs>
    ): Prisma__ProductionRecordClient<ProductionRecordGetPayload<T>>

    /**
     * Delete a ProductionRecord.
     * @param {ProductionRecordDeleteArgs} args - Arguments to delete one ProductionRecord.
     * @example
     * // Delete one ProductionRecord
     * const ProductionRecord = await prisma.productionRecord.delete({
     *   where: {
     *     // ... filter to delete one ProductionRecord
     *   }
     * })
     * 
    **/
    delete<T extends ProductionRecordDeleteArgs>(
      args: SelectSubset<T, ProductionRecordDeleteArgs>
    ): Prisma__ProductionRecordClient<ProductionRecordGetPayload<T>>

    /**
     * Update one ProductionRecord.
     * @param {ProductionRecordUpdateArgs} args - Arguments to update one ProductionRecord.
     * @example
     * // Update one ProductionRecord
     * const productionRecord = await prisma.productionRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductionRecordUpdateArgs>(
      args: SelectSubset<T, ProductionRecordUpdateArgs>
    ): Prisma__ProductionRecordClient<ProductionRecordGetPayload<T>>

    /**
     * Delete zero or more ProductionRecords.
     * @param {ProductionRecordDeleteManyArgs} args - Arguments to filter ProductionRecords to delete.
     * @example
     * // Delete a few ProductionRecords
     * const { count } = await prisma.productionRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductionRecordDeleteManyArgs>(
      args?: SelectSubset<T, ProductionRecordDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductionRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductionRecords
     * const productionRecord = await prisma.productionRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductionRecordUpdateManyArgs>(
      args: SelectSubset<T, ProductionRecordUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductionRecord.
     * @param {ProductionRecordUpsertArgs} args - Arguments to update or create a ProductionRecord.
     * @example
     * // Update or create a ProductionRecord
     * const productionRecord = await prisma.productionRecord.upsert({
     *   create: {
     *     // ... data to create a ProductionRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductionRecord we want to update
     *   }
     * })
    **/
    upsert<T extends ProductionRecordUpsertArgs>(
      args: SelectSubset<T, ProductionRecordUpsertArgs>
    ): Prisma__ProductionRecordClient<ProductionRecordGetPayload<T>>

    /**
     * Count the number of ProductionRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionRecordCountArgs} args - Arguments to filter ProductionRecords to count.
     * @example
     * // Count the number of ProductionRecords
     * const count = await prisma.productionRecord.count({
     *   where: {
     *     // ... the filter for the ProductionRecords we want to count
     *   }
     * })
    **/
    count<T extends ProductionRecordCountArgs>(
      args?: Subset<T, ProductionRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductionRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductionRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductionRecordAggregateArgs>(args: Subset<T, ProductionRecordAggregateArgs>): Prisma.PrismaPromise<GetProductionRecordAggregateType<T>>

    /**
     * Group by ProductionRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductionRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductionRecordGroupByArgs['orderBy'] }
        : { orderBy?: ProductionRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductionRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductionRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductionRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductionRecordClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    product<T extends ProductArgs= {}>(args?: Subset<T, ProductArgs>): Prisma__ProductClient<ProductGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProductionRecord base type for findUnique actions
   */
  export type ProductionRecordFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ProductionRecord
     */
    select?: ProductionRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductionRecordInclude | null
    /**
     * Filter, which ProductionRecord to fetch.
     */
    where: ProductionRecordWhereUniqueInput
  }

  /**
   * ProductionRecord findUnique
   */
  export interface ProductionRecordFindUniqueArgs extends ProductionRecordFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProductionRecord findUniqueOrThrow
   */
  export type ProductionRecordFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProductionRecord
     */
    select?: ProductionRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductionRecordInclude | null
    /**
     * Filter, which ProductionRecord to fetch.
     */
    where: ProductionRecordWhereUniqueInput
  }


  /**
   * ProductionRecord base type for findFirst actions
   */
  export type ProductionRecordFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ProductionRecord
     */
    select?: ProductionRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductionRecordInclude | null
    /**
     * Filter, which ProductionRecord to fetch.
     */
    where?: ProductionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionRecords to fetch.
     */
    orderBy?: Enumerable<ProductionRecordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductionRecords.
     */
    cursor?: ProductionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductionRecords.
     */
    distinct?: Enumerable<ProductionRecordScalarFieldEnum>
  }

  /**
   * ProductionRecord findFirst
   */
  export interface ProductionRecordFindFirstArgs extends ProductionRecordFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProductionRecord findFirstOrThrow
   */
  export type ProductionRecordFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProductionRecord
     */
    select?: ProductionRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductionRecordInclude | null
    /**
     * Filter, which ProductionRecord to fetch.
     */
    where?: ProductionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionRecords to fetch.
     */
    orderBy?: Enumerable<ProductionRecordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductionRecords.
     */
    cursor?: ProductionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductionRecords.
     */
    distinct?: Enumerable<ProductionRecordScalarFieldEnum>
  }


  /**
   * ProductionRecord findMany
   */
  export type ProductionRecordFindManyArgs = {
    /**
     * Select specific fields to fetch from the ProductionRecord
     */
    select?: ProductionRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductionRecordInclude | null
    /**
     * Filter, which ProductionRecords to fetch.
     */
    where?: ProductionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionRecords to fetch.
     */
    orderBy?: Enumerable<ProductionRecordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductionRecords.
     */
    cursor?: ProductionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionRecords.
     */
    skip?: number
    distinct?: Enumerable<ProductionRecordScalarFieldEnum>
  }


  /**
   * ProductionRecord create
   */
  export type ProductionRecordCreateArgs = {
    /**
     * Select specific fields to fetch from the ProductionRecord
     */
    select?: ProductionRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductionRecordInclude | null
    /**
     * The data needed to create a ProductionRecord.
     */
    data: XOR<ProductionRecordCreateInput, ProductionRecordUncheckedCreateInput>
  }


  /**
   * ProductionRecord update
   */
  export type ProductionRecordUpdateArgs = {
    /**
     * Select specific fields to fetch from the ProductionRecord
     */
    select?: ProductionRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductionRecordInclude | null
    /**
     * The data needed to update a ProductionRecord.
     */
    data: XOR<ProductionRecordUpdateInput, ProductionRecordUncheckedUpdateInput>
    /**
     * Choose, which ProductionRecord to update.
     */
    where: ProductionRecordWhereUniqueInput
  }


  /**
   * ProductionRecord updateMany
   */
  export type ProductionRecordUpdateManyArgs = {
    /**
     * The data used to update ProductionRecords.
     */
    data: XOR<ProductionRecordUpdateManyMutationInput, ProductionRecordUncheckedUpdateManyInput>
    /**
     * Filter which ProductionRecords to update
     */
    where?: ProductionRecordWhereInput
  }


  /**
   * ProductionRecord upsert
   */
  export type ProductionRecordUpsertArgs = {
    /**
     * Select specific fields to fetch from the ProductionRecord
     */
    select?: ProductionRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductionRecordInclude | null
    /**
     * The filter to search for the ProductionRecord to update in case it exists.
     */
    where: ProductionRecordWhereUniqueInput
    /**
     * In case the ProductionRecord found by the `where` argument doesn't exist, create a new ProductionRecord with this data.
     */
    create: XOR<ProductionRecordCreateInput, ProductionRecordUncheckedCreateInput>
    /**
     * In case the ProductionRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductionRecordUpdateInput, ProductionRecordUncheckedUpdateInput>
  }


  /**
   * ProductionRecord delete
   */
  export type ProductionRecordDeleteArgs = {
    /**
     * Select specific fields to fetch from the ProductionRecord
     */
    select?: ProductionRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductionRecordInclude | null
    /**
     * Filter which ProductionRecord to delete.
     */
    where: ProductionRecordWhereUniqueInput
  }


  /**
   * ProductionRecord deleteMany
   */
  export type ProductionRecordDeleteManyArgs = {
    /**
     * Filter which ProductionRecords to delete
     */
    where?: ProductionRecordWhereInput
  }


  /**
   * ProductionRecord without action
   */
  export type ProductionRecordArgs = {
    /**
     * Select specific fields to fetch from the ProductionRecord
     */
    select?: ProductionRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductionRecordInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ProductScalarFieldEnum: {
    id: 'id',
    description: 'description',
    technicalDescription: 'technicalDescription',
    ute: 'ute',
    classification: 'classification',
    partNumber: 'partNumber',
    sapCode: 'sapCode',
    projectNumber: 'projectNumber',
    amount: 'amount'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductionRecordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    productId: 'productId'
  };

  export type ProductionRecordScalarFieldEnum = (typeof ProductionRecordScalarFieldEnum)[keyof typeof ProductionRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type ProductWhereInput = {
    AND?: Enumerable<ProductWhereInput>
    OR?: Enumerable<ProductWhereInput>
    NOT?: Enumerable<ProductWhereInput>
    id?: StringFilter | string
    description?: StringFilter | string
    technicalDescription?: StringFilter | string
    ute?: StringFilter | string
    classification?: StringFilter | string
    partNumber?: StringFilter | string
    sapCode?: StringFilter | string
    projectNumber?: StringFilter | string
    amount?: IntFilter | number
    ProductionRecord?: ProductionRecordListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    technicalDescription?: SortOrder
    ute?: SortOrder
    classification?: SortOrder
    partNumber?: SortOrder
    sapCode?: SortOrder
    projectNumber?: SortOrder
    amount?: SortOrder
    ProductionRecord?: ProductionRecordOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = {
    id?: string
  }

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    technicalDescription?: SortOrder
    ute?: SortOrder
    classification?: SortOrder
    partNumber?: SortOrder
    sapCode?: SortOrder
    projectNumber?: SortOrder
    amount?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    technicalDescription?: StringWithAggregatesFilter | string
    ute?: StringWithAggregatesFilter | string
    classification?: StringWithAggregatesFilter | string
    partNumber?: StringWithAggregatesFilter | string
    sapCode?: StringWithAggregatesFilter | string
    projectNumber?: StringWithAggregatesFilter | string
    amount?: IntWithAggregatesFilter | number
  }

  export type ProductionRecordWhereInput = {
    AND?: Enumerable<ProductionRecordWhereInput>
    OR?: Enumerable<ProductionRecordWhereInput>
    NOT?: Enumerable<ProductionRecordWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    productId?: StringFilter | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ProductionRecordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductionRecordWhereUniqueInput = {
    id?: string
  }

  export type ProductionRecordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    productId?: SortOrder
    _count?: ProductionRecordCountOrderByAggregateInput
    _max?: ProductionRecordMaxOrderByAggregateInput
    _min?: ProductionRecordMinOrderByAggregateInput
  }

  export type ProductionRecordScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductionRecordScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductionRecordScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductionRecordScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    productId?: StringWithAggregatesFilter | string
  }

  export type ProductCreateInput = {
    id?: string
    description: string
    technicalDescription: string
    ute: string
    classification: string
    partNumber: string
    sapCode: string
    projectNumber: string
    amount: number
    ProductionRecord?: ProductionRecordCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    description: string
    technicalDescription: string
    ute: string
    classification: string
    partNumber: string
    sapCode: string
    projectNumber: string
    amount: number
    ProductionRecord?: ProductionRecordUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    technicalDescription?: StringFieldUpdateOperationsInput | string
    ute?: StringFieldUpdateOperationsInput | string
    classification?: StringFieldUpdateOperationsInput | string
    partNumber?: StringFieldUpdateOperationsInput | string
    sapCode?: StringFieldUpdateOperationsInput | string
    projectNumber?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    ProductionRecord?: ProductionRecordUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    technicalDescription?: StringFieldUpdateOperationsInput | string
    ute?: StringFieldUpdateOperationsInput | string
    classification?: StringFieldUpdateOperationsInput | string
    partNumber?: StringFieldUpdateOperationsInput | string
    sapCode?: StringFieldUpdateOperationsInput | string
    projectNumber?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    ProductionRecord?: ProductionRecordUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    technicalDescription?: StringFieldUpdateOperationsInput | string
    ute?: StringFieldUpdateOperationsInput | string
    classification?: StringFieldUpdateOperationsInput | string
    partNumber?: StringFieldUpdateOperationsInput | string
    sapCode?: StringFieldUpdateOperationsInput | string
    projectNumber?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    technicalDescription?: StringFieldUpdateOperationsInput | string
    ute?: StringFieldUpdateOperationsInput | string
    classification?: StringFieldUpdateOperationsInput | string
    partNumber?: StringFieldUpdateOperationsInput | string
    sapCode?: StringFieldUpdateOperationsInput | string
    projectNumber?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type ProductionRecordCreateInput = {
    id: string
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutProductionRecordInput
  }

  export type ProductionRecordUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    productId: string
  }

  export type ProductionRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutProductionRecordNestedInput
  }

  export type ProductionRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductionRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductionRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type ProductionRecordListRelationFilter = {
    every?: ProductionRecordWhereInput
    some?: ProductionRecordWhereInput
    none?: ProductionRecordWhereInput
  }

  export type ProductionRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    technicalDescription?: SortOrder
    ute?: SortOrder
    classification?: SortOrder
    partNumber?: SortOrder
    sapCode?: SortOrder
    projectNumber?: SortOrder
    amount?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    technicalDescription?: SortOrder
    ute?: SortOrder
    classification?: SortOrder
    partNumber?: SortOrder
    sapCode?: SortOrder
    projectNumber?: SortOrder
    amount?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    technicalDescription?: SortOrder
    ute?: SortOrder
    classification?: SortOrder
    partNumber?: SortOrder
    sapCode?: SortOrder
    projectNumber?: SortOrder
    amount?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductionRecordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    productId?: SortOrder
  }

  export type ProductionRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    productId?: SortOrder
  }

  export type ProductionRecordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    productId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type ProductionRecordCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductionRecordCreateWithoutProductInput>, Enumerable<ProductionRecordUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductionRecordCreateOrConnectWithoutProductInput>
    connect?: Enumerable<ProductionRecordWhereUniqueInput>
  }

  export type ProductionRecordUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductionRecordCreateWithoutProductInput>, Enumerable<ProductionRecordUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductionRecordCreateOrConnectWithoutProductInput>
    connect?: Enumerable<ProductionRecordWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductionRecordUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ProductionRecordCreateWithoutProductInput>, Enumerable<ProductionRecordUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductionRecordCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ProductionRecordUpsertWithWhereUniqueWithoutProductInput>
    set?: Enumerable<ProductionRecordWhereUniqueInput>
    disconnect?: Enumerable<ProductionRecordWhereUniqueInput>
    delete?: Enumerable<ProductionRecordWhereUniqueInput>
    connect?: Enumerable<ProductionRecordWhereUniqueInput>
    update?: Enumerable<ProductionRecordUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ProductionRecordUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ProductionRecordScalarWhereInput>
  }

  export type ProductionRecordUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ProductionRecordCreateWithoutProductInput>, Enumerable<ProductionRecordUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductionRecordCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ProductionRecordUpsertWithWhereUniqueWithoutProductInput>
    set?: Enumerable<ProductionRecordWhereUniqueInput>
    disconnect?: Enumerable<ProductionRecordWhereUniqueInput>
    delete?: Enumerable<ProductionRecordWhereUniqueInput>
    connect?: Enumerable<ProductionRecordWhereUniqueInput>
    update?: Enumerable<ProductionRecordUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ProductionRecordUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ProductionRecordScalarWhereInput>
  }

  export type ProductCreateNestedOneWithoutProductionRecordInput = {
    create?: XOR<ProductCreateWithoutProductionRecordInput, ProductUncheckedCreateWithoutProductionRecordInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductionRecordInput
    connect?: ProductWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductUpdateOneRequiredWithoutProductionRecordNestedInput = {
    create?: XOR<ProductCreateWithoutProductionRecordInput, ProductUncheckedCreateWithoutProductionRecordInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductionRecordInput
    upsert?: ProductUpsertWithoutProductionRecordInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutProductionRecordInput, ProductUncheckedUpdateWithoutProductionRecordInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type ProductionRecordCreateWithoutProductInput = {
    id: string
    createdAt?: Date | string
  }

  export type ProductionRecordUncheckedCreateWithoutProductInput = {
    id: string
    createdAt?: Date | string
  }

  export type ProductionRecordCreateOrConnectWithoutProductInput = {
    where: ProductionRecordWhereUniqueInput
    create: XOR<ProductionRecordCreateWithoutProductInput, ProductionRecordUncheckedCreateWithoutProductInput>
  }

  export type ProductionRecordUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductionRecordWhereUniqueInput
    update: XOR<ProductionRecordUpdateWithoutProductInput, ProductionRecordUncheckedUpdateWithoutProductInput>
    create: XOR<ProductionRecordCreateWithoutProductInput, ProductionRecordUncheckedCreateWithoutProductInput>
  }

  export type ProductionRecordUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductionRecordWhereUniqueInput
    data: XOR<ProductionRecordUpdateWithoutProductInput, ProductionRecordUncheckedUpdateWithoutProductInput>
  }

  export type ProductionRecordUpdateManyWithWhereWithoutProductInput = {
    where: ProductionRecordScalarWhereInput
    data: XOR<ProductionRecordUpdateManyMutationInput, ProductionRecordUncheckedUpdateManyWithoutProductionRecordInput>
  }

  export type ProductionRecordScalarWhereInput = {
    AND?: Enumerable<ProductionRecordScalarWhereInput>
    OR?: Enumerable<ProductionRecordScalarWhereInput>
    NOT?: Enumerable<ProductionRecordScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    productId?: StringFilter | string
  }

  export type ProductCreateWithoutProductionRecordInput = {
    id?: string
    description: string
    technicalDescription: string
    ute: string
    classification: string
    partNumber: string
    sapCode: string
    projectNumber: string
    amount: number
  }

  export type ProductUncheckedCreateWithoutProductionRecordInput = {
    id?: string
    description: string
    technicalDescription: string
    ute: string
    classification: string
    partNumber: string
    sapCode: string
    projectNumber: string
    amount: number
  }

  export type ProductCreateOrConnectWithoutProductionRecordInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductionRecordInput, ProductUncheckedCreateWithoutProductionRecordInput>
  }

  export type ProductUpsertWithoutProductionRecordInput = {
    update: XOR<ProductUpdateWithoutProductionRecordInput, ProductUncheckedUpdateWithoutProductionRecordInput>
    create: XOR<ProductCreateWithoutProductionRecordInput, ProductUncheckedCreateWithoutProductionRecordInput>
  }

  export type ProductUpdateWithoutProductionRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    technicalDescription?: StringFieldUpdateOperationsInput | string
    ute?: StringFieldUpdateOperationsInput | string
    classification?: StringFieldUpdateOperationsInput | string
    partNumber?: StringFieldUpdateOperationsInput | string
    sapCode?: StringFieldUpdateOperationsInput | string
    projectNumber?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUncheckedUpdateWithoutProductionRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    technicalDescription?: StringFieldUpdateOperationsInput | string
    ute?: StringFieldUpdateOperationsInput | string
    classification?: StringFieldUpdateOperationsInput | string
    partNumber?: StringFieldUpdateOperationsInput | string
    sapCode?: StringFieldUpdateOperationsInput | string
    projectNumber?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type ProductionRecordUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductionRecordUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductionRecordUncheckedUpdateManyWithoutProductionRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}