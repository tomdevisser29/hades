
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Error
 * 
 */
export type Error = $Result.DefaultSelection<Prisma.$ErrorPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Errors
 * const errors = await prisma.error.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Errors
   * const errors = await prisma.error.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.error`: Exposes CRUD operations for the **Error** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Errors
    * const errors = await prisma.error.findMany()
    * ```
    */
  get error(): Prisma.ErrorDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Error: 'Error'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "error"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Error: {
        payload: Prisma.$ErrorPayload<ExtArgs>
        fields: Prisma.ErrorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ErrorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ErrorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorPayload>
          }
          findFirst: {
            args: Prisma.ErrorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ErrorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorPayload>
          }
          findMany: {
            args: Prisma.ErrorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorPayload>[]
          }
          create: {
            args: Prisma.ErrorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorPayload>
          }
          createMany: {
            args: Prisma.ErrorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ErrorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorPayload>[]
          }
          delete: {
            args: Prisma.ErrorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorPayload>
          }
          update: {
            args: Prisma.ErrorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorPayload>
          }
          deleteMany: {
            args: Prisma.ErrorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ErrorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ErrorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorPayload>[]
          }
          upsert: {
            args: Prisma.ErrorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorPayload>
          }
          aggregate: {
            args: Prisma.ErrorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateError>
          }
          groupBy: {
            args: Prisma.ErrorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ErrorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ErrorCountArgs<ExtArgs>
            result: $Utils.Optional<ErrorCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    error?: ErrorOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Error
   */

  export type AggregateError = {
    _count: ErrorCountAggregateOutputType | null
    _avg: ErrorAvgAggregateOutputType | null
    _sum: ErrorSumAggregateOutputType | null
    _min: ErrorMinAggregateOutputType | null
    _max: ErrorMaxAggregateOutputType | null
  }

  export type ErrorAvgAggregateOutputType = {
    id: number | null
    errno: number | null
    line: number | null
  }

  export type ErrorSumAggregateOutputType = {
    id: number | null
    errno: number | null
    line: number | null
  }

  export type ErrorMinAggregateOutputType = {
    id: number | null
    type: string | null
    errno: number | null
    message: string | null
    file: string | null
    line: number | null
    timestamp: Date | null
    site: string | null
    phpVersion: string | null
    wpVersion: string | null
    fingerprint: string | null
    createdAt: Date | null
  }

  export type ErrorMaxAggregateOutputType = {
    id: number | null
    type: string | null
    errno: number | null
    message: string | null
    file: string | null
    line: number | null
    timestamp: Date | null
    site: string | null
    phpVersion: string | null
    wpVersion: string | null
    fingerprint: string | null
    createdAt: Date | null
  }

  export type ErrorCountAggregateOutputType = {
    id: number
    type: number
    errno: number
    message: number
    file: number
    line: number
    timestamp: number
    site: number
    phpVersion: number
    wpVersion: number
    wpTheme: number
    wpPlugins: number
    fingerprint: number
    backtrace: number
    createdAt: number
    _all: number
  }


  export type ErrorAvgAggregateInputType = {
    id?: true
    errno?: true
    line?: true
  }

  export type ErrorSumAggregateInputType = {
    id?: true
    errno?: true
    line?: true
  }

  export type ErrorMinAggregateInputType = {
    id?: true
    type?: true
    errno?: true
    message?: true
    file?: true
    line?: true
    timestamp?: true
    site?: true
    phpVersion?: true
    wpVersion?: true
    fingerprint?: true
    createdAt?: true
  }

  export type ErrorMaxAggregateInputType = {
    id?: true
    type?: true
    errno?: true
    message?: true
    file?: true
    line?: true
    timestamp?: true
    site?: true
    phpVersion?: true
    wpVersion?: true
    fingerprint?: true
    createdAt?: true
  }

  export type ErrorCountAggregateInputType = {
    id?: true
    type?: true
    errno?: true
    message?: true
    file?: true
    line?: true
    timestamp?: true
    site?: true
    phpVersion?: true
    wpVersion?: true
    wpTheme?: true
    wpPlugins?: true
    fingerprint?: true
    backtrace?: true
    createdAt?: true
    _all?: true
  }

  export type ErrorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Error to aggregate.
     */
    where?: ErrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Errors to fetch.
     */
    orderBy?: ErrorOrderByWithRelationInput | ErrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ErrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Errors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Errors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Errors
    **/
    _count?: true | ErrorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ErrorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ErrorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ErrorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ErrorMaxAggregateInputType
  }

  export type GetErrorAggregateType<T extends ErrorAggregateArgs> = {
        [P in keyof T & keyof AggregateError]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateError[P]>
      : GetScalarType<T[P], AggregateError[P]>
  }




  export type ErrorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ErrorWhereInput
    orderBy?: ErrorOrderByWithAggregationInput | ErrorOrderByWithAggregationInput[]
    by: ErrorScalarFieldEnum[] | ErrorScalarFieldEnum
    having?: ErrorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ErrorCountAggregateInputType | true
    _avg?: ErrorAvgAggregateInputType
    _sum?: ErrorSumAggregateInputType
    _min?: ErrorMinAggregateInputType
    _max?: ErrorMaxAggregateInputType
  }

  export type ErrorGroupByOutputType = {
    id: number
    type: string
    errno: number
    message: string
    file: string
    line: number
    timestamp: Date
    site: string
    phpVersion: string
    wpVersion: string
    wpTheme: JsonValue | null
    wpPlugins: JsonValue | null
    fingerprint: string
    backtrace: JsonValue
    createdAt: Date
    _count: ErrorCountAggregateOutputType | null
    _avg: ErrorAvgAggregateOutputType | null
    _sum: ErrorSumAggregateOutputType | null
    _min: ErrorMinAggregateOutputType | null
    _max: ErrorMaxAggregateOutputType | null
  }

  type GetErrorGroupByPayload<T extends ErrorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ErrorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ErrorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ErrorGroupByOutputType[P]>
            : GetScalarType<T[P], ErrorGroupByOutputType[P]>
        }
      >
    >


  export type ErrorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    errno?: boolean
    message?: boolean
    file?: boolean
    line?: boolean
    timestamp?: boolean
    site?: boolean
    phpVersion?: boolean
    wpVersion?: boolean
    wpTheme?: boolean
    wpPlugins?: boolean
    fingerprint?: boolean
    backtrace?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["error"]>

  export type ErrorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    errno?: boolean
    message?: boolean
    file?: boolean
    line?: boolean
    timestamp?: boolean
    site?: boolean
    phpVersion?: boolean
    wpVersion?: boolean
    wpTheme?: boolean
    wpPlugins?: boolean
    fingerprint?: boolean
    backtrace?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["error"]>

  export type ErrorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    errno?: boolean
    message?: boolean
    file?: boolean
    line?: boolean
    timestamp?: boolean
    site?: boolean
    phpVersion?: boolean
    wpVersion?: boolean
    wpTheme?: boolean
    wpPlugins?: boolean
    fingerprint?: boolean
    backtrace?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["error"]>

  export type ErrorSelectScalar = {
    id?: boolean
    type?: boolean
    errno?: boolean
    message?: boolean
    file?: boolean
    line?: boolean
    timestamp?: boolean
    site?: boolean
    phpVersion?: boolean
    wpVersion?: boolean
    wpTheme?: boolean
    wpPlugins?: boolean
    fingerprint?: boolean
    backtrace?: boolean
    createdAt?: boolean
  }

  export type ErrorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "errno" | "message" | "file" | "line" | "timestamp" | "site" | "phpVersion" | "wpVersion" | "wpTheme" | "wpPlugins" | "fingerprint" | "backtrace" | "createdAt", ExtArgs["result"]["error"]>

  export type $ErrorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Error"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      errno: number
      message: string
      file: string
      line: number
      timestamp: Date
      site: string
      phpVersion: string
      wpVersion: string
      wpTheme: Prisma.JsonValue | null
      wpPlugins: Prisma.JsonValue | null
      fingerprint: string
      backtrace: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["error"]>
    composites: {}
  }

  type ErrorGetPayload<S extends boolean | null | undefined | ErrorDefaultArgs> = $Result.GetResult<Prisma.$ErrorPayload, S>

  type ErrorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ErrorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ErrorCountAggregateInputType | true
    }

  export interface ErrorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Error'], meta: { name: 'Error' } }
    /**
     * Find zero or one Error that matches the filter.
     * @param {ErrorFindUniqueArgs} args - Arguments to find a Error
     * @example
     * // Get one Error
     * const error = await prisma.error.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ErrorFindUniqueArgs>(args: SelectSubset<T, ErrorFindUniqueArgs<ExtArgs>>): Prisma__ErrorClient<$Result.GetResult<Prisma.$ErrorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Error that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ErrorFindUniqueOrThrowArgs} args - Arguments to find a Error
     * @example
     * // Get one Error
     * const error = await prisma.error.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ErrorFindUniqueOrThrowArgs>(args: SelectSubset<T, ErrorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ErrorClient<$Result.GetResult<Prisma.$ErrorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Error that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorFindFirstArgs} args - Arguments to find a Error
     * @example
     * // Get one Error
     * const error = await prisma.error.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ErrorFindFirstArgs>(args?: SelectSubset<T, ErrorFindFirstArgs<ExtArgs>>): Prisma__ErrorClient<$Result.GetResult<Prisma.$ErrorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Error that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorFindFirstOrThrowArgs} args - Arguments to find a Error
     * @example
     * // Get one Error
     * const error = await prisma.error.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ErrorFindFirstOrThrowArgs>(args?: SelectSubset<T, ErrorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ErrorClient<$Result.GetResult<Prisma.$ErrorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Errors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Errors
     * const errors = await prisma.error.findMany()
     * 
     * // Get first 10 Errors
     * const errors = await prisma.error.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const errorWithIdOnly = await prisma.error.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ErrorFindManyArgs>(args?: SelectSubset<T, ErrorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErrorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Error.
     * @param {ErrorCreateArgs} args - Arguments to create a Error.
     * @example
     * // Create one Error
     * const Error = await prisma.error.create({
     *   data: {
     *     // ... data to create a Error
     *   }
     * })
     * 
     */
    create<T extends ErrorCreateArgs>(args: SelectSubset<T, ErrorCreateArgs<ExtArgs>>): Prisma__ErrorClient<$Result.GetResult<Prisma.$ErrorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Errors.
     * @param {ErrorCreateManyArgs} args - Arguments to create many Errors.
     * @example
     * // Create many Errors
     * const error = await prisma.error.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ErrorCreateManyArgs>(args?: SelectSubset<T, ErrorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Errors and returns the data saved in the database.
     * @param {ErrorCreateManyAndReturnArgs} args - Arguments to create many Errors.
     * @example
     * // Create many Errors
     * const error = await prisma.error.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Errors and only return the `id`
     * const errorWithIdOnly = await prisma.error.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ErrorCreateManyAndReturnArgs>(args?: SelectSubset<T, ErrorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErrorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Error.
     * @param {ErrorDeleteArgs} args - Arguments to delete one Error.
     * @example
     * // Delete one Error
     * const Error = await prisma.error.delete({
     *   where: {
     *     // ... filter to delete one Error
     *   }
     * })
     * 
     */
    delete<T extends ErrorDeleteArgs>(args: SelectSubset<T, ErrorDeleteArgs<ExtArgs>>): Prisma__ErrorClient<$Result.GetResult<Prisma.$ErrorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Error.
     * @param {ErrorUpdateArgs} args - Arguments to update one Error.
     * @example
     * // Update one Error
     * const error = await prisma.error.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ErrorUpdateArgs>(args: SelectSubset<T, ErrorUpdateArgs<ExtArgs>>): Prisma__ErrorClient<$Result.GetResult<Prisma.$ErrorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Errors.
     * @param {ErrorDeleteManyArgs} args - Arguments to filter Errors to delete.
     * @example
     * // Delete a few Errors
     * const { count } = await prisma.error.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ErrorDeleteManyArgs>(args?: SelectSubset<T, ErrorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Errors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Errors
     * const error = await prisma.error.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ErrorUpdateManyArgs>(args: SelectSubset<T, ErrorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Errors and returns the data updated in the database.
     * @param {ErrorUpdateManyAndReturnArgs} args - Arguments to update many Errors.
     * @example
     * // Update many Errors
     * const error = await prisma.error.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Errors and only return the `id`
     * const errorWithIdOnly = await prisma.error.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ErrorUpdateManyAndReturnArgs>(args: SelectSubset<T, ErrorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErrorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Error.
     * @param {ErrorUpsertArgs} args - Arguments to update or create a Error.
     * @example
     * // Update or create a Error
     * const error = await prisma.error.upsert({
     *   create: {
     *     // ... data to create a Error
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Error we want to update
     *   }
     * })
     */
    upsert<T extends ErrorUpsertArgs>(args: SelectSubset<T, ErrorUpsertArgs<ExtArgs>>): Prisma__ErrorClient<$Result.GetResult<Prisma.$ErrorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Errors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorCountArgs} args - Arguments to filter Errors to count.
     * @example
     * // Count the number of Errors
     * const count = await prisma.error.count({
     *   where: {
     *     // ... the filter for the Errors we want to count
     *   }
     * })
    **/
    count<T extends ErrorCountArgs>(
      args?: Subset<T, ErrorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ErrorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Error.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ErrorAggregateArgs>(args: Subset<T, ErrorAggregateArgs>): Prisma.PrismaPromise<GetErrorAggregateType<T>>

    /**
     * Group by Error.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorGroupByArgs} args - Group by arguments.
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
      T extends ErrorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ErrorGroupByArgs['orderBy'] }
        : { orderBy?: ErrorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ErrorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetErrorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Error model
   */
  readonly fields: ErrorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Error.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ErrorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Error model
   */
  interface ErrorFieldRefs {
    readonly id: FieldRef<"Error", 'Int'>
    readonly type: FieldRef<"Error", 'String'>
    readonly errno: FieldRef<"Error", 'Int'>
    readonly message: FieldRef<"Error", 'String'>
    readonly file: FieldRef<"Error", 'String'>
    readonly line: FieldRef<"Error", 'Int'>
    readonly timestamp: FieldRef<"Error", 'DateTime'>
    readonly site: FieldRef<"Error", 'String'>
    readonly phpVersion: FieldRef<"Error", 'String'>
    readonly wpVersion: FieldRef<"Error", 'String'>
    readonly wpTheme: FieldRef<"Error", 'Json'>
    readonly wpPlugins: FieldRef<"Error", 'Json'>
    readonly fingerprint: FieldRef<"Error", 'String'>
    readonly backtrace: FieldRef<"Error", 'Json'>
    readonly createdAt: FieldRef<"Error", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Error findUnique
   */
  export type ErrorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Error
     */
    select?: ErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Error
     */
    omit?: ErrorOmit<ExtArgs> | null
    /**
     * Filter, which Error to fetch.
     */
    where: ErrorWhereUniqueInput
  }

  /**
   * Error findUniqueOrThrow
   */
  export type ErrorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Error
     */
    select?: ErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Error
     */
    omit?: ErrorOmit<ExtArgs> | null
    /**
     * Filter, which Error to fetch.
     */
    where: ErrorWhereUniqueInput
  }

  /**
   * Error findFirst
   */
  export type ErrorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Error
     */
    select?: ErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Error
     */
    omit?: ErrorOmit<ExtArgs> | null
    /**
     * Filter, which Error to fetch.
     */
    where?: ErrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Errors to fetch.
     */
    orderBy?: ErrorOrderByWithRelationInput | ErrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Errors.
     */
    cursor?: ErrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Errors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Errors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Errors.
     */
    distinct?: ErrorScalarFieldEnum | ErrorScalarFieldEnum[]
  }

  /**
   * Error findFirstOrThrow
   */
  export type ErrorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Error
     */
    select?: ErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Error
     */
    omit?: ErrorOmit<ExtArgs> | null
    /**
     * Filter, which Error to fetch.
     */
    where?: ErrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Errors to fetch.
     */
    orderBy?: ErrorOrderByWithRelationInput | ErrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Errors.
     */
    cursor?: ErrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Errors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Errors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Errors.
     */
    distinct?: ErrorScalarFieldEnum | ErrorScalarFieldEnum[]
  }

  /**
   * Error findMany
   */
  export type ErrorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Error
     */
    select?: ErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Error
     */
    omit?: ErrorOmit<ExtArgs> | null
    /**
     * Filter, which Errors to fetch.
     */
    where?: ErrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Errors to fetch.
     */
    orderBy?: ErrorOrderByWithRelationInput | ErrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Errors.
     */
    cursor?: ErrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Errors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Errors.
     */
    skip?: number
    distinct?: ErrorScalarFieldEnum | ErrorScalarFieldEnum[]
  }

  /**
   * Error create
   */
  export type ErrorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Error
     */
    select?: ErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Error
     */
    omit?: ErrorOmit<ExtArgs> | null
    /**
     * The data needed to create a Error.
     */
    data: XOR<ErrorCreateInput, ErrorUncheckedCreateInput>
  }

  /**
   * Error createMany
   */
  export type ErrorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Errors.
     */
    data: ErrorCreateManyInput | ErrorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Error createManyAndReturn
   */
  export type ErrorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Error
     */
    select?: ErrorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Error
     */
    omit?: ErrorOmit<ExtArgs> | null
    /**
     * The data used to create many Errors.
     */
    data: ErrorCreateManyInput | ErrorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Error update
   */
  export type ErrorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Error
     */
    select?: ErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Error
     */
    omit?: ErrorOmit<ExtArgs> | null
    /**
     * The data needed to update a Error.
     */
    data: XOR<ErrorUpdateInput, ErrorUncheckedUpdateInput>
    /**
     * Choose, which Error to update.
     */
    where: ErrorWhereUniqueInput
  }

  /**
   * Error updateMany
   */
  export type ErrorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Errors.
     */
    data: XOR<ErrorUpdateManyMutationInput, ErrorUncheckedUpdateManyInput>
    /**
     * Filter which Errors to update
     */
    where?: ErrorWhereInput
    /**
     * Limit how many Errors to update.
     */
    limit?: number
  }

  /**
   * Error updateManyAndReturn
   */
  export type ErrorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Error
     */
    select?: ErrorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Error
     */
    omit?: ErrorOmit<ExtArgs> | null
    /**
     * The data used to update Errors.
     */
    data: XOR<ErrorUpdateManyMutationInput, ErrorUncheckedUpdateManyInput>
    /**
     * Filter which Errors to update
     */
    where?: ErrorWhereInput
    /**
     * Limit how many Errors to update.
     */
    limit?: number
  }

  /**
   * Error upsert
   */
  export type ErrorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Error
     */
    select?: ErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Error
     */
    omit?: ErrorOmit<ExtArgs> | null
    /**
     * The filter to search for the Error to update in case it exists.
     */
    where: ErrorWhereUniqueInput
    /**
     * In case the Error found by the `where` argument doesn't exist, create a new Error with this data.
     */
    create: XOR<ErrorCreateInput, ErrorUncheckedCreateInput>
    /**
     * In case the Error was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ErrorUpdateInput, ErrorUncheckedUpdateInput>
  }

  /**
   * Error delete
   */
  export type ErrorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Error
     */
    select?: ErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Error
     */
    omit?: ErrorOmit<ExtArgs> | null
    /**
     * Filter which Error to delete.
     */
    where: ErrorWhereUniqueInput
  }

  /**
   * Error deleteMany
   */
  export type ErrorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Errors to delete
     */
    where?: ErrorWhereInput
    /**
     * Limit how many Errors to delete.
     */
    limit?: number
  }

  /**
   * Error without action
   */
  export type ErrorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Error
     */
    select?: ErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Error
     */
    omit?: ErrorOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ErrorScalarFieldEnum: {
    id: 'id',
    type: 'type',
    errno: 'errno',
    message: 'message',
    file: 'file',
    line: 'line',
    timestamp: 'timestamp',
    site: 'site',
    phpVersion: 'phpVersion',
    wpVersion: 'wpVersion',
    wpTheme: 'wpTheme',
    wpPlugins: 'wpPlugins',
    fingerprint: 'fingerprint',
    backtrace: 'backtrace',
    createdAt: 'createdAt'
  };

  export type ErrorScalarFieldEnum = (typeof ErrorScalarFieldEnum)[keyof typeof ErrorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ErrorWhereInput = {
    AND?: ErrorWhereInput | ErrorWhereInput[]
    OR?: ErrorWhereInput[]
    NOT?: ErrorWhereInput | ErrorWhereInput[]
    id?: IntFilter<"Error"> | number
    type?: StringFilter<"Error"> | string
    errno?: IntFilter<"Error"> | number
    message?: StringFilter<"Error"> | string
    file?: StringFilter<"Error"> | string
    line?: IntFilter<"Error"> | number
    timestamp?: DateTimeFilter<"Error"> | Date | string
    site?: StringFilter<"Error"> | string
    phpVersion?: StringFilter<"Error"> | string
    wpVersion?: StringFilter<"Error"> | string
    wpTheme?: JsonNullableFilter<"Error">
    wpPlugins?: JsonNullableFilter<"Error">
    fingerprint?: StringFilter<"Error"> | string
    backtrace?: JsonFilter<"Error">
    createdAt?: DateTimeFilter<"Error"> | Date | string
  }

  export type ErrorOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    errno?: SortOrder
    message?: SortOrder
    file?: SortOrder
    line?: SortOrder
    timestamp?: SortOrder
    site?: SortOrder
    phpVersion?: SortOrder
    wpVersion?: SortOrder
    wpTheme?: SortOrderInput | SortOrder
    wpPlugins?: SortOrderInput | SortOrder
    fingerprint?: SortOrder
    backtrace?: SortOrder
    createdAt?: SortOrder
  }

  export type ErrorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    fingerprint_timestamp_site?: ErrorFingerprintTimestampSiteCompoundUniqueInput
    AND?: ErrorWhereInput | ErrorWhereInput[]
    OR?: ErrorWhereInput[]
    NOT?: ErrorWhereInput | ErrorWhereInput[]
    type?: StringFilter<"Error"> | string
    errno?: IntFilter<"Error"> | number
    message?: StringFilter<"Error"> | string
    file?: StringFilter<"Error"> | string
    line?: IntFilter<"Error"> | number
    timestamp?: DateTimeFilter<"Error"> | Date | string
    site?: StringFilter<"Error"> | string
    phpVersion?: StringFilter<"Error"> | string
    wpVersion?: StringFilter<"Error"> | string
    wpTheme?: JsonNullableFilter<"Error">
    wpPlugins?: JsonNullableFilter<"Error">
    fingerprint?: StringFilter<"Error"> | string
    backtrace?: JsonFilter<"Error">
    createdAt?: DateTimeFilter<"Error"> | Date | string
  }, "id" | "fingerprint_timestamp_site">

  export type ErrorOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    errno?: SortOrder
    message?: SortOrder
    file?: SortOrder
    line?: SortOrder
    timestamp?: SortOrder
    site?: SortOrder
    phpVersion?: SortOrder
    wpVersion?: SortOrder
    wpTheme?: SortOrderInput | SortOrder
    wpPlugins?: SortOrderInput | SortOrder
    fingerprint?: SortOrder
    backtrace?: SortOrder
    createdAt?: SortOrder
    _count?: ErrorCountOrderByAggregateInput
    _avg?: ErrorAvgOrderByAggregateInput
    _max?: ErrorMaxOrderByAggregateInput
    _min?: ErrorMinOrderByAggregateInput
    _sum?: ErrorSumOrderByAggregateInput
  }

  export type ErrorScalarWhereWithAggregatesInput = {
    AND?: ErrorScalarWhereWithAggregatesInput | ErrorScalarWhereWithAggregatesInput[]
    OR?: ErrorScalarWhereWithAggregatesInput[]
    NOT?: ErrorScalarWhereWithAggregatesInput | ErrorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Error"> | number
    type?: StringWithAggregatesFilter<"Error"> | string
    errno?: IntWithAggregatesFilter<"Error"> | number
    message?: StringWithAggregatesFilter<"Error"> | string
    file?: StringWithAggregatesFilter<"Error"> | string
    line?: IntWithAggregatesFilter<"Error"> | number
    timestamp?: DateTimeWithAggregatesFilter<"Error"> | Date | string
    site?: StringWithAggregatesFilter<"Error"> | string
    phpVersion?: StringWithAggregatesFilter<"Error"> | string
    wpVersion?: StringWithAggregatesFilter<"Error"> | string
    wpTheme?: JsonNullableWithAggregatesFilter<"Error">
    wpPlugins?: JsonNullableWithAggregatesFilter<"Error">
    fingerprint?: StringWithAggregatesFilter<"Error"> | string
    backtrace?: JsonWithAggregatesFilter<"Error">
    createdAt?: DateTimeWithAggregatesFilter<"Error"> | Date | string
  }

  export type ErrorCreateInput = {
    type: string
    errno: number
    message: string
    file: string
    line: number
    timestamp: Date | string
    site: string
    phpVersion: string
    wpVersion: string
    wpTheme?: NullableJsonNullValueInput | InputJsonValue
    wpPlugins?: NullableJsonNullValueInput | InputJsonValue
    fingerprint: string
    backtrace: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ErrorUncheckedCreateInput = {
    id?: number
    type: string
    errno: number
    message: string
    file: string
    line: number
    timestamp: Date | string
    site: string
    phpVersion: string
    wpVersion: string
    wpTheme?: NullableJsonNullValueInput | InputJsonValue
    wpPlugins?: NullableJsonNullValueInput | InputJsonValue
    fingerprint: string
    backtrace: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ErrorUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    errno?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    line?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: StringFieldUpdateOperationsInput | string
    phpVersion?: StringFieldUpdateOperationsInput | string
    wpVersion?: StringFieldUpdateOperationsInput | string
    wpTheme?: NullableJsonNullValueInput | InputJsonValue
    wpPlugins?: NullableJsonNullValueInput | InputJsonValue
    fingerprint?: StringFieldUpdateOperationsInput | string
    backtrace?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ErrorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    errno?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    line?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: StringFieldUpdateOperationsInput | string
    phpVersion?: StringFieldUpdateOperationsInput | string
    wpVersion?: StringFieldUpdateOperationsInput | string
    wpTheme?: NullableJsonNullValueInput | InputJsonValue
    wpPlugins?: NullableJsonNullValueInput | InputJsonValue
    fingerprint?: StringFieldUpdateOperationsInput | string
    backtrace?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ErrorCreateManyInput = {
    id?: number
    type: string
    errno: number
    message: string
    file: string
    line: number
    timestamp: Date | string
    site: string
    phpVersion: string
    wpVersion: string
    wpTheme?: NullableJsonNullValueInput | InputJsonValue
    wpPlugins?: NullableJsonNullValueInput | InputJsonValue
    fingerprint: string
    backtrace: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ErrorUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    errno?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    line?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: StringFieldUpdateOperationsInput | string
    phpVersion?: StringFieldUpdateOperationsInput | string
    wpVersion?: StringFieldUpdateOperationsInput | string
    wpTheme?: NullableJsonNullValueInput | InputJsonValue
    wpPlugins?: NullableJsonNullValueInput | InputJsonValue
    fingerprint?: StringFieldUpdateOperationsInput | string
    backtrace?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ErrorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    errno?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    line?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: StringFieldUpdateOperationsInput | string
    phpVersion?: StringFieldUpdateOperationsInput | string
    wpVersion?: StringFieldUpdateOperationsInput | string
    wpTheme?: NullableJsonNullValueInput | InputJsonValue
    wpPlugins?: NullableJsonNullValueInput | InputJsonValue
    fingerprint?: StringFieldUpdateOperationsInput | string
    backtrace?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ErrorFingerprintTimestampSiteCompoundUniqueInput = {
    fingerprint: string
    timestamp: Date | string
    site: string
  }

  export type ErrorCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    errno?: SortOrder
    message?: SortOrder
    file?: SortOrder
    line?: SortOrder
    timestamp?: SortOrder
    site?: SortOrder
    phpVersion?: SortOrder
    wpVersion?: SortOrder
    wpTheme?: SortOrder
    wpPlugins?: SortOrder
    fingerprint?: SortOrder
    backtrace?: SortOrder
    createdAt?: SortOrder
  }

  export type ErrorAvgOrderByAggregateInput = {
    id?: SortOrder
    errno?: SortOrder
    line?: SortOrder
  }

  export type ErrorMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    errno?: SortOrder
    message?: SortOrder
    file?: SortOrder
    line?: SortOrder
    timestamp?: SortOrder
    site?: SortOrder
    phpVersion?: SortOrder
    wpVersion?: SortOrder
    fingerprint?: SortOrder
    createdAt?: SortOrder
  }

  export type ErrorMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    errno?: SortOrder
    message?: SortOrder
    file?: SortOrder
    line?: SortOrder
    timestamp?: SortOrder
    site?: SortOrder
    phpVersion?: SortOrder
    wpVersion?: SortOrder
    fingerprint?: SortOrder
    createdAt?: SortOrder
  }

  export type ErrorSumOrderByAggregateInput = {
    id?: SortOrder
    errno?: SortOrder
    line?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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