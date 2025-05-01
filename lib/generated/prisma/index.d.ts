
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
 * Model CarMake
 * 
 */
export type CarMake = $Result.DefaultSelection<Prisma.$CarMakePayload>
/**
 * Model CarModel
 * 
 */
export type CarModel = $Result.DefaultSelection<Prisma.$CarModelPayload>
/**
 * Model Cars
 * 
 */
export type Cars = $Result.DefaultSelection<Prisma.$CarsPayload>
/**
 * Model CarImages
 * 
 */
export type CarImages = $Result.DefaultSelection<Prisma.$CarImagesPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Entity
 * 
 */
export type Entity = $Result.DefaultSelection<Prisma.$EntityPayload>
/**
 * Model File
 * 
 */
export type File = $Result.DefaultSelection<Prisma.$FilePayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const BodyStyle: {
  SEDAN: 'SEDAN',
  SUV: 'SUV',
  HATCHBACK: 'HATCHBACK',
  COUPE: 'COUPE',
  CONVERTIBLE: 'CONVERTIBLE',
  WAGON: 'WAGON',
  VAN: 'VAN',
  TRUCK: 'TRUCK',
  CROSSOVER: 'CROSSOVER',
  MINIVAN: 'MINIVAN'
};

export type BodyStyle = (typeof BodyStyle)[keyof typeof BodyStyle]


export const FuelType: {
  GASOLINE: 'GASOLINE',
  DIESEL: 'DIESEL',
  ELECTRIC: 'ELECTRIC',
  HYBRID: 'HYBRID',
  PLUGIN_HYBRID: 'PLUGIN_HYBRID',
  HYDROGEN: 'HYDROGEN',
  NATURAL_GAS: 'NATURAL_GAS'
};

export type FuelType = (typeof FuelType)[keyof typeof FuelType]


export const TransmissionType: {
  MANUAL: 'MANUAL',
  AUTOMATIC: 'AUTOMATIC',
  CVT: 'CVT',
  SEMI_AUTOMATIC: 'SEMI_AUTOMATIC',
  DUAL_CLUTCH: 'DUAL_CLUTCH'
};

export type TransmissionType = (typeof TransmissionType)[keyof typeof TransmissionType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type BodyStyle = $Enums.BodyStyle

export const BodyStyle: typeof $Enums.BodyStyle

export type FuelType = $Enums.FuelType

export const FuelType: typeof $Enums.FuelType

export type TransmissionType = $Enums.TransmissionType

export const TransmissionType: typeof $Enums.TransmissionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CarMakes
 * const carMakes = await prisma.carMake.findMany()
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
   * // Fetch zero or more CarMakes
   * const carMakes = await prisma.carMake.findMany()
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
   * `prisma.carMake`: Exposes CRUD operations for the **CarMake** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarMakes
    * const carMakes = await prisma.carMake.findMany()
    * ```
    */
  get carMake(): Prisma.CarMakeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carModel`: Exposes CRUD operations for the **CarModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarModels
    * const carModels = await prisma.carModel.findMany()
    * ```
    */
  get carModel(): Prisma.CarModelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cars`: Exposes CRUD operations for the **Cars** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.cars.findMany()
    * ```
    */
  get cars(): Prisma.CarsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carImages`: Exposes CRUD operations for the **CarImages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarImages
    * const carImages = await prisma.carImages.findMany()
    * ```
    */
  get carImages(): Prisma.CarImagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entity`: Exposes CRUD operations for the **Entity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entities
    * const entities = await prisma.entity.findMany()
    * ```
    */
  get entity(): Prisma.EntityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;
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
    CarMake: 'CarMake',
    CarModel: 'CarModel',
    Cars: 'Cars',
    CarImages: 'CarImages',
    User: 'User',
    Entity: 'Entity',
    File: 'File',
    Image: 'Image'
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
      modelProps: "carMake" | "carModel" | "cars" | "carImages" | "user" | "entity" | "file" | "image"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CarMake: {
        payload: Prisma.$CarMakePayload<ExtArgs>
        fields: Prisma.CarMakeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarMakeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMakePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarMakeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMakePayload>
          }
          findFirst: {
            args: Prisma.CarMakeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMakePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarMakeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMakePayload>
          }
          findMany: {
            args: Prisma.CarMakeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMakePayload>[]
          }
          create: {
            args: Prisma.CarMakeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMakePayload>
          }
          createMany: {
            args: Prisma.CarMakeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarMakeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMakePayload>[]
          }
          delete: {
            args: Prisma.CarMakeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMakePayload>
          }
          update: {
            args: Prisma.CarMakeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMakePayload>
          }
          deleteMany: {
            args: Prisma.CarMakeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarMakeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarMakeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMakePayload>[]
          }
          upsert: {
            args: Prisma.CarMakeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMakePayload>
          }
          aggregate: {
            args: Prisma.CarMakeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarMake>
          }
          groupBy: {
            args: Prisma.CarMakeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarMakeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarMakeCountArgs<ExtArgs>
            result: $Utils.Optional<CarMakeCountAggregateOutputType> | number
          }
        }
      }
      CarModel: {
        payload: Prisma.$CarModelPayload<ExtArgs>
        fields: Prisma.CarModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload>
          }
          findFirst: {
            args: Prisma.CarModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload>
          }
          findMany: {
            args: Prisma.CarModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload>[]
          }
          create: {
            args: Prisma.CarModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload>
          }
          createMany: {
            args: Prisma.CarModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload>[]
          }
          delete: {
            args: Prisma.CarModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload>
          }
          update: {
            args: Prisma.CarModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload>
          }
          deleteMany: {
            args: Prisma.CarModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload>[]
          }
          upsert: {
            args: Prisma.CarModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload>
          }
          aggregate: {
            args: Prisma.CarModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarModel>
          }
          groupBy: {
            args: Prisma.CarModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarModelCountArgs<ExtArgs>
            result: $Utils.Optional<CarModelCountAggregateOutputType> | number
          }
        }
      }
      Cars: {
        payload: Prisma.$CarsPayload<ExtArgs>
        fields: Prisma.CarsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          findFirst: {
            args: Prisma.CarsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          findMany: {
            args: Prisma.CarsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>[]
          }
          create: {
            args: Prisma.CarsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          createMany: {
            args: Prisma.CarsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>[]
          }
          delete: {
            args: Prisma.CarsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          update: {
            args: Prisma.CarsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          deleteMany: {
            args: Prisma.CarsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>[]
          }
          upsert: {
            args: Prisma.CarsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          aggregate: {
            args: Prisma.CarsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCars>
          }
          groupBy: {
            args: Prisma.CarsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarsCountArgs<ExtArgs>
            result: $Utils.Optional<CarsCountAggregateOutputType> | number
          }
        }
      }
      CarImages: {
        payload: Prisma.$CarImagesPayload<ExtArgs>
        fields: Prisma.CarImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarImagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarImagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarImagesPayload>
          }
          findFirst: {
            args: Prisma.CarImagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarImagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarImagesPayload>
          }
          findMany: {
            args: Prisma.CarImagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarImagesPayload>[]
          }
          create: {
            args: Prisma.CarImagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarImagesPayload>
          }
          createMany: {
            args: Prisma.CarImagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarImagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarImagesPayload>[]
          }
          delete: {
            args: Prisma.CarImagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarImagesPayload>
          }
          update: {
            args: Prisma.CarImagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarImagesPayload>
          }
          deleteMany: {
            args: Prisma.CarImagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarImagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarImagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarImagesPayload>[]
          }
          upsert: {
            args: Prisma.CarImagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarImagesPayload>
          }
          aggregate: {
            args: Prisma.CarImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarImages>
          }
          groupBy: {
            args: Prisma.CarImagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarImagesCountArgs<ExtArgs>
            result: $Utils.Optional<CarImagesCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Entity: {
        payload: Prisma.$EntityPayload<ExtArgs>
        fields: Prisma.EntityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          findFirst: {
            args: Prisma.EntityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          findMany: {
            args: Prisma.EntityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>[]
          }
          create: {
            args: Prisma.EntityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          createMany: {
            args: Prisma.EntityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>[]
          }
          delete: {
            args: Prisma.EntityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          update: {
            args: Prisma.EntityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          deleteMany: {
            args: Prisma.EntityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EntityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>[]
          }
          upsert: {
            args: Prisma.EntityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          aggregate: {
            args: Prisma.EntityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntity>
          }
          groupBy: {
            args: Prisma.EntityGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntityGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntityCountArgs<ExtArgs>
            result: $Utils.Optional<EntityCountAggregateOutputType> | number
          }
        }
      }
      File: {
        payload: Prisma.$FilePayload<ExtArgs>
        fields: Prisma.FileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findFirst: {
            args: Prisma.FileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findMany: {
            args: Prisma.FileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          create: {
            args: Prisma.FileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          createMany: {
            args: Prisma.FileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          delete: {
            args: Prisma.FileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          update: {
            args: Prisma.FileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          deleteMany: {
            args: Prisma.FileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          upsert: {
            args: Prisma.FileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.FileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileCountArgs<ExtArgs>
            result: $Utils.Optional<FileCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
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
    carMake?: CarMakeOmit
    carModel?: CarModelOmit
    cars?: CarsOmit
    carImages?: CarImagesOmit
    user?: UserOmit
    entity?: EntityOmit
    file?: FileOmit
    image?: ImageOmit
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
   * Count Type CarMakeCountOutputType
   */

  export type CarMakeCountOutputType = {
    models: number
    cars: number
  }

  export type CarMakeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    models?: boolean | CarMakeCountOutputTypeCountModelsArgs
    cars?: boolean | CarMakeCountOutputTypeCountCarsArgs
  }

  // Custom InputTypes
  /**
   * CarMakeCountOutputType without action
   */
  export type CarMakeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMakeCountOutputType
     */
    select?: CarMakeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarMakeCountOutputType without action
   */
  export type CarMakeCountOutputTypeCountModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarModelWhereInput
  }

  /**
   * CarMakeCountOutputType without action
   */
  export type CarMakeCountOutputTypeCountCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarsWhereInput
  }


  /**
   * Count Type CarModelCountOutputType
   */

  export type CarModelCountOutputType = {
    cars: number
  }

  export type CarModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | CarModelCountOutputTypeCountCarsArgs
  }

  // Custom InputTypes
  /**
   * CarModelCountOutputType without action
   */
  export type CarModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModelCountOutputType
     */
    select?: CarModelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarModelCountOutputType without action
   */
  export type CarModelCountOutputTypeCountCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarsWhereInput
  }


  /**
   * Count Type CarsCountOutputType
   */

  export type CarsCountOutputType = {
    carImages: number
  }

  export type CarsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carImages?: boolean | CarsCountOutputTypeCountCarImagesArgs
  }

  // Custom InputTypes
  /**
   * CarsCountOutputType without action
   */
  export type CarsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsCountOutputType
     */
    select?: CarsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarsCountOutputType without action
   */
  export type CarsCountOutputTypeCountCarImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarImagesWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    cars: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | UserCountOutputTypeCountCarsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarsWhereInput
  }


  /**
   * Count Type FileCountOutputType
   */

  export type FileCountOutputType = {
    s240Images: number
    s480Images: number
    s720Images: number
    s1080Images: number
  }

  export type FileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    s240Images?: boolean | FileCountOutputTypeCountS240ImagesArgs
    s480Images?: boolean | FileCountOutputTypeCountS480ImagesArgs
    s720Images?: boolean | FileCountOutputTypeCountS720ImagesArgs
    s1080Images?: boolean | FileCountOutputTypeCountS1080ImagesArgs
  }

  // Custom InputTypes
  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileCountOutputType
     */
    select?: FileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeCountS240ImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }

  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeCountS480ImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }

  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeCountS720ImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }

  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeCountS1080ImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * Count Type ImageCountOutputType
   */

  export type ImageCountOutputType = {
    CarImages: number
  }

  export type ImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CarImages?: boolean | ImageCountOutputTypeCountCarImagesArgs
  }

  // Custom InputTypes
  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     */
    select?: ImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountCarImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarImagesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CarMake
   */

  export type AggregateCarMake = {
    _count: CarMakeCountAggregateOutputType | null
    _avg: CarMakeAvgAggregateOutputType | null
    _sum: CarMakeSumAggregateOutputType | null
    _min: CarMakeMinAggregateOutputType | null
    _max: CarMakeMaxAggregateOutputType | null
  }

  export type CarMakeAvgAggregateOutputType = {
    id: number | null
  }

  export type CarMakeSumAggregateOutputType = {
    id: number | null
  }

  export type CarMakeMinAggregateOutputType = {
    id: number | null
    name: string | null
    countryOfOrigin: string | null
    logoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarMakeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    countryOfOrigin: string | null
    logoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarMakeCountAggregateOutputType = {
    id: number
    name: number
    countryOfOrigin: number
    logoUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CarMakeAvgAggregateInputType = {
    id?: true
  }

  export type CarMakeSumAggregateInputType = {
    id?: true
  }

  export type CarMakeMinAggregateInputType = {
    id?: true
    name?: true
    countryOfOrigin?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarMakeMaxAggregateInputType = {
    id?: true
    name?: true
    countryOfOrigin?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarMakeCountAggregateInputType = {
    id?: true
    name?: true
    countryOfOrigin?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CarMakeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarMake to aggregate.
     */
    where?: CarMakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarMakes to fetch.
     */
    orderBy?: CarMakeOrderByWithRelationInput | CarMakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarMakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarMakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarMakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CarMakes
    **/
    _count?: true | CarMakeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarMakeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarMakeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarMakeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarMakeMaxAggregateInputType
  }

  export type GetCarMakeAggregateType<T extends CarMakeAggregateArgs> = {
        [P in keyof T & keyof AggregateCarMake]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarMake[P]>
      : GetScalarType<T[P], AggregateCarMake[P]>
  }




  export type CarMakeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarMakeWhereInput
    orderBy?: CarMakeOrderByWithAggregationInput | CarMakeOrderByWithAggregationInput[]
    by: CarMakeScalarFieldEnum[] | CarMakeScalarFieldEnum
    having?: CarMakeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarMakeCountAggregateInputType | true
    _avg?: CarMakeAvgAggregateInputType
    _sum?: CarMakeSumAggregateInputType
    _min?: CarMakeMinAggregateInputType
    _max?: CarMakeMaxAggregateInputType
  }

  export type CarMakeGroupByOutputType = {
    id: number
    name: string
    countryOfOrigin: string | null
    logoUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: CarMakeCountAggregateOutputType | null
    _avg: CarMakeAvgAggregateOutputType | null
    _sum: CarMakeSumAggregateOutputType | null
    _min: CarMakeMinAggregateOutputType | null
    _max: CarMakeMaxAggregateOutputType | null
  }

  type GetCarMakeGroupByPayload<T extends CarMakeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarMakeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarMakeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarMakeGroupByOutputType[P]>
            : GetScalarType<T[P], CarMakeGroupByOutputType[P]>
        }
      >
    >


  export type CarMakeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    countryOfOrigin?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    models?: boolean | CarMake$modelsArgs<ExtArgs>
    cars?: boolean | CarMake$carsArgs<ExtArgs>
    _count?: boolean | CarMakeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carMake"]>

  export type CarMakeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    countryOfOrigin?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["carMake"]>

  export type CarMakeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    countryOfOrigin?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["carMake"]>

  export type CarMakeSelectScalar = {
    id?: boolean
    name?: boolean
    countryOfOrigin?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CarMakeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "countryOfOrigin" | "logoUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["carMake"]>
  export type CarMakeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    models?: boolean | CarMake$modelsArgs<ExtArgs>
    cars?: boolean | CarMake$carsArgs<ExtArgs>
    _count?: boolean | CarMakeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarMakeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CarMakeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CarMakePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CarMake"
    objects: {
      models: Prisma.$CarModelPayload<ExtArgs>[]
      cars: Prisma.$CarsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      countryOfOrigin: string | null
      logoUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["carMake"]>
    composites: {}
  }

  type CarMakeGetPayload<S extends boolean | null | undefined | CarMakeDefaultArgs> = $Result.GetResult<Prisma.$CarMakePayload, S>

  type CarMakeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarMakeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarMakeCountAggregateInputType | true
    }

  export interface CarMakeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CarMake'], meta: { name: 'CarMake' } }
    /**
     * Find zero or one CarMake that matches the filter.
     * @param {CarMakeFindUniqueArgs} args - Arguments to find a CarMake
     * @example
     * // Get one CarMake
     * const carMake = await prisma.carMake.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarMakeFindUniqueArgs>(args: SelectSubset<T, CarMakeFindUniqueArgs<ExtArgs>>): Prisma__CarMakeClient<$Result.GetResult<Prisma.$CarMakePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CarMake that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarMakeFindUniqueOrThrowArgs} args - Arguments to find a CarMake
     * @example
     * // Get one CarMake
     * const carMake = await prisma.carMake.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarMakeFindUniqueOrThrowArgs>(args: SelectSubset<T, CarMakeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarMakeClient<$Result.GetResult<Prisma.$CarMakePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarMake that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarMakeFindFirstArgs} args - Arguments to find a CarMake
     * @example
     * // Get one CarMake
     * const carMake = await prisma.carMake.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarMakeFindFirstArgs>(args?: SelectSubset<T, CarMakeFindFirstArgs<ExtArgs>>): Prisma__CarMakeClient<$Result.GetResult<Prisma.$CarMakePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarMake that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarMakeFindFirstOrThrowArgs} args - Arguments to find a CarMake
     * @example
     * // Get one CarMake
     * const carMake = await prisma.carMake.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarMakeFindFirstOrThrowArgs>(args?: SelectSubset<T, CarMakeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarMakeClient<$Result.GetResult<Prisma.$CarMakePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CarMakes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarMakeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarMakes
     * const carMakes = await prisma.carMake.findMany()
     * 
     * // Get first 10 CarMakes
     * const carMakes = await prisma.carMake.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carMakeWithIdOnly = await prisma.carMake.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarMakeFindManyArgs>(args?: SelectSubset<T, CarMakeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarMakePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CarMake.
     * @param {CarMakeCreateArgs} args - Arguments to create a CarMake.
     * @example
     * // Create one CarMake
     * const CarMake = await prisma.carMake.create({
     *   data: {
     *     // ... data to create a CarMake
     *   }
     * })
     * 
     */
    create<T extends CarMakeCreateArgs>(args: SelectSubset<T, CarMakeCreateArgs<ExtArgs>>): Prisma__CarMakeClient<$Result.GetResult<Prisma.$CarMakePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CarMakes.
     * @param {CarMakeCreateManyArgs} args - Arguments to create many CarMakes.
     * @example
     * // Create many CarMakes
     * const carMake = await prisma.carMake.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarMakeCreateManyArgs>(args?: SelectSubset<T, CarMakeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CarMakes and returns the data saved in the database.
     * @param {CarMakeCreateManyAndReturnArgs} args - Arguments to create many CarMakes.
     * @example
     * // Create many CarMakes
     * const carMake = await prisma.carMake.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CarMakes and only return the `id`
     * const carMakeWithIdOnly = await prisma.carMake.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarMakeCreateManyAndReturnArgs>(args?: SelectSubset<T, CarMakeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarMakePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CarMake.
     * @param {CarMakeDeleteArgs} args - Arguments to delete one CarMake.
     * @example
     * // Delete one CarMake
     * const CarMake = await prisma.carMake.delete({
     *   where: {
     *     // ... filter to delete one CarMake
     *   }
     * })
     * 
     */
    delete<T extends CarMakeDeleteArgs>(args: SelectSubset<T, CarMakeDeleteArgs<ExtArgs>>): Prisma__CarMakeClient<$Result.GetResult<Prisma.$CarMakePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CarMake.
     * @param {CarMakeUpdateArgs} args - Arguments to update one CarMake.
     * @example
     * // Update one CarMake
     * const carMake = await prisma.carMake.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarMakeUpdateArgs>(args: SelectSubset<T, CarMakeUpdateArgs<ExtArgs>>): Prisma__CarMakeClient<$Result.GetResult<Prisma.$CarMakePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CarMakes.
     * @param {CarMakeDeleteManyArgs} args - Arguments to filter CarMakes to delete.
     * @example
     * // Delete a few CarMakes
     * const { count } = await prisma.carMake.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarMakeDeleteManyArgs>(args?: SelectSubset<T, CarMakeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarMakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarMakeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarMakes
     * const carMake = await prisma.carMake.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarMakeUpdateManyArgs>(args: SelectSubset<T, CarMakeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarMakes and returns the data updated in the database.
     * @param {CarMakeUpdateManyAndReturnArgs} args - Arguments to update many CarMakes.
     * @example
     * // Update many CarMakes
     * const carMake = await prisma.carMake.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CarMakes and only return the `id`
     * const carMakeWithIdOnly = await prisma.carMake.updateManyAndReturn({
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
    updateManyAndReturn<T extends CarMakeUpdateManyAndReturnArgs>(args: SelectSubset<T, CarMakeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarMakePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CarMake.
     * @param {CarMakeUpsertArgs} args - Arguments to update or create a CarMake.
     * @example
     * // Update or create a CarMake
     * const carMake = await prisma.carMake.upsert({
     *   create: {
     *     // ... data to create a CarMake
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarMake we want to update
     *   }
     * })
     */
    upsert<T extends CarMakeUpsertArgs>(args: SelectSubset<T, CarMakeUpsertArgs<ExtArgs>>): Prisma__CarMakeClient<$Result.GetResult<Prisma.$CarMakePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CarMakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarMakeCountArgs} args - Arguments to filter CarMakes to count.
     * @example
     * // Count the number of CarMakes
     * const count = await prisma.carMake.count({
     *   where: {
     *     // ... the filter for the CarMakes we want to count
     *   }
     * })
    **/
    count<T extends CarMakeCountArgs>(
      args?: Subset<T, CarMakeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarMakeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarMake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarMakeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarMakeAggregateArgs>(args: Subset<T, CarMakeAggregateArgs>): Prisma.PrismaPromise<GetCarMakeAggregateType<T>>

    /**
     * Group by CarMake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarMakeGroupByArgs} args - Group by arguments.
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
      T extends CarMakeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarMakeGroupByArgs['orderBy'] }
        : { orderBy?: CarMakeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarMakeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarMakeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CarMake model
   */
  readonly fields: CarMakeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarMake.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarMakeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    models<T extends CarMake$modelsArgs<ExtArgs> = {}>(args?: Subset<T, CarMake$modelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cars<T extends CarMake$carsArgs<ExtArgs> = {}>(args?: Subset<T, CarMake$carsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CarMake model
   */
  interface CarMakeFieldRefs {
    readonly id: FieldRef<"CarMake", 'Int'>
    readonly name: FieldRef<"CarMake", 'String'>
    readonly countryOfOrigin: FieldRef<"CarMake", 'String'>
    readonly logoUrl: FieldRef<"CarMake", 'String'>
    readonly createdAt: FieldRef<"CarMake", 'DateTime'>
    readonly updatedAt: FieldRef<"CarMake", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CarMake findUnique
   */
  export type CarMakeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMake
     */
    select?: CarMakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMake
     */
    omit?: CarMakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMakeInclude<ExtArgs> | null
    /**
     * Filter, which CarMake to fetch.
     */
    where: CarMakeWhereUniqueInput
  }

  /**
   * CarMake findUniqueOrThrow
   */
  export type CarMakeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMake
     */
    select?: CarMakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMake
     */
    omit?: CarMakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMakeInclude<ExtArgs> | null
    /**
     * Filter, which CarMake to fetch.
     */
    where: CarMakeWhereUniqueInput
  }

  /**
   * CarMake findFirst
   */
  export type CarMakeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMake
     */
    select?: CarMakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMake
     */
    omit?: CarMakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMakeInclude<ExtArgs> | null
    /**
     * Filter, which CarMake to fetch.
     */
    where?: CarMakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarMakes to fetch.
     */
    orderBy?: CarMakeOrderByWithRelationInput | CarMakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarMakes.
     */
    cursor?: CarMakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarMakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarMakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarMakes.
     */
    distinct?: CarMakeScalarFieldEnum | CarMakeScalarFieldEnum[]
  }

  /**
   * CarMake findFirstOrThrow
   */
  export type CarMakeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMake
     */
    select?: CarMakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMake
     */
    omit?: CarMakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMakeInclude<ExtArgs> | null
    /**
     * Filter, which CarMake to fetch.
     */
    where?: CarMakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarMakes to fetch.
     */
    orderBy?: CarMakeOrderByWithRelationInput | CarMakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarMakes.
     */
    cursor?: CarMakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarMakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarMakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarMakes.
     */
    distinct?: CarMakeScalarFieldEnum | CarMakeScalarFieldEnum[]
  }

  /**
   * CarMake findMany
   */
  export type CarMakeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMake
     */
    select?: CarMakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMake
     */
    omit?: CarMakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMakeInclude<ExtArgs> | null
    /**
     * Filter, which CarMakes to fetch.
     */
    where?: CarMakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarMakes to fetch.
     */
    orderBy?: CarMakeOrderByWithRelationInput | CarMakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CarMakes.
     */
    cursor?: CarMakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarMakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarMakes.
     */
    skip?: number
    distinct?: CarMakeScalarFieldEnum | CarMakeScalarFieldEnum[]
  }

  /**
   * CarMake create
   */
  export type CarMakeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMake
     */
    select?: CarMakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMake
     */
    omit?: CarMakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMakeInclude<ExtArgs> | null
    /**
     * The data needed to create a CarMake.
     */
    data: XOR<CarMakeCreateInput, CarMakeUncheckedCreateInput>
  }

  /**
   * CarMake createMany
   */
  export type CarMakeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CarMakes.
     */
    data: CarMakeCreateManyInput | CarMakeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CarMake createManyAndReturn
   */
  export type CarMakeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMake
     */
    select?: CarMakeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarMake
     */
    omit?: CarMakeOmit<ExtArgs> | null
    /**
     * The data used to create many CarMakes.
     */
    data: CarMakeCreateManyInput | CarMakeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CarMake update
   */
  export type CarMakeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMake
     */
    select?: CarMakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMake
     */
    omit?: CarMakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMakeInclude<ExtArgs> | null
    /**
     * The data needed to update a CarMake.
     */
    data: XOR<CarMakeUpdateInput, CarMakeUncheckedUpdateInput>
    /**
     * Choose, which CarMake to update.
     */
    where: CarMakeWhereUniqueInput
  }

  /**
   * CarMake updateMany
   */
  export type CarMakeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CarMakes.
     */
    data: XOR<CarMakeUpdateManyMutationInput, CarMakeUncheckedUpdateManyInput>
    /**
     * Filter which CarMakes to update
     */
    where?: CarMakeWhereInput
    /**
     * Limit how many CarMakes to update.
     */
    limit?: number
  }

  /**
   * CarMake updateManyAndReturn
   */
  export type CarMakeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMake
     */
    select?: CarMakeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarMake
     */
    omit?: CarMakeOmit<ExtArgs> | null
    /**
     * The data used to update CarMakes.
     */
    data: XOR<CarMakeUpdateManyMutationInput, CarMakeUncheckedUpdateManyInput>
    /**
     * Filter which CarMakes to update
     */
    where?: CarMakeWhereInput
    /**
     * Limit how many CarMakes to update.
     */
    limit?: number
  }

  /**
   * CarMake upsert
   */
  export type CarMakeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMake
     */
    select?: CarMakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMake
     */
    omit?: CarMakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMakeInclude<ExtArgs> | null
    /**
     * The filter to search for the CarMake to update in case it exists.
     */
    where: CarMakeWhereUniqueInput
    /**
     * In case the CarMake found by the `where` argument doesn't exist, create a new CarMake with this data.
     */
    create: XOR<CarMakeCreateInput, CarMakeUncheckedCreateInput>
    /**
     * In case the CarMake was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarMakeUpdateInput, CarMakeUncheckedUpdateInput>
  }

  /**
   * CarMake delete
   */
  export type CarMakeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMake
     */
    select?: CarMakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMake
     */
    omit?: CarMakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMakeInclude<ExtArgs> | null
    /**
     * Filter which CarMake to delete.
     */
    where: CarMakeWhereUniqueInput
  }

  /**
   * CarMake deleteMany
   */
  export type CarMakeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarMakes to delete
     */
    where?: CarMakeWhereInput
    /**
     * Limit how many CarMakes to delete.
     */
    limit?: number
  }

  /**
   * CarMake.models
   */
  export type CarMake$modelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null
    where?: CarModelWhereInput
    orderBy?: CarModelOrderByWithRelationInput | CarModelOrderByWithRelationInput[]
    cursor?: CarModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarModelScalarFieldEnum | CarModelScalarFieldEnum[]
  }

  /**
   * CarMake.cars
   */
  export type CarMake$carsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    where?: CarsWhereInput
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    cursor?: CarsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }

  /**
   * CarMake without action
   */
  export type CarMakeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMake
     */
    select?: CarMakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMake
     */
    omit?: CarMakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMakeInclude<ExtArgs> | null
  }


  /**
   * Model CarModel
   */

  export type AggregateCarModel = {
    _count: CarModelCountAggregateOutputType | null
    _avg: CarModelAvgAggregateOutputType | null
    _sum: CarModelSumAggregateOutputType | null
    _min: CarModelMinAggregateOutputType | null
    _max: CarModelMaxAggregateOutputType | null
  }

  export type CarModelAvgAggregateOutputType = {
    id: number | null
    makeId: number | null
  }

  export type CarModelSumAggregateOutputType = {
    id: number | null
    makeId: number | null
  }

  export type CarModelMinAggregateOutputType = {
    id: number | null
    name: string | null
    makeId: number | null
  }

  export type CarModelMaxAggregateOutputType = {
    id: number | null
    name: string | null
    makeId: number | null
  }

  export type CarModelCountAggregateOutputType = {
    id: number
    name: number
    makeId: number
    _all: number
  }


  export type CarModelAvgAggregateInputType = {
    id?: true
    makeId?: true
  }

  export type CarModelSumAggregateInputType = {
    id?: true
    makeId?: true
  }

  export type CarModelMinAggregateInputType = {
    id?: true
    name?: true
    makeId?: true
  }

  export type CarModelMaxAggregateInputType = {
    id?: true
    name?: true
    makeId?: true
  }

  export type CarModelCountAggregateInputType = {
    id?: true
    name?: true
    makeId?: true
    _all?: true
  }

  export type CarModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarModel to aggregate.
     */
    where?: CarModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarModels to fetch.
     */
    orderBy?: CarModelOrderByWithRelationInput | CarModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CarModels
    **/
    _count?: true | CarModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarModelMaxAggregateInputType
  }

  export type GetCarModelAggregateType<T extends CarModelAggregateArgs> = {
        [P in keyof T & keyof AggregateCarModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarModel[P]>
      : GetScalarType<T[P], AggregateCarModel[P]>
  }




  export type CarModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarModelWhereInput
    orderBy?: CarModelOrderByWithAggregationInput | CarModelOrderByWithAggregationInput[]
    by: CarModelScalarFieldEnum[] | CarModelScalarFieldEnum
    having?: CarModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarModelCountAggregateInputType | true
    _avg?: CarModelAvgAggregateInputType
    _sum?: CarModelSumAggregateInputType
    _min?: CarModelMinAggregateInputType
    _max?: CarModelMaxAggregateInputType
  }

  export type CarModelGroupByOutputType = {
    id: number
    name: string
    makeId: number
    _count: CarModelCountAggregateOutputType | null
    _avg: CarModelAvgAggregateOutputType | null
    _sum: CarModelSumAggregateOutputType | null
    _min: CarModelMinAggregateOutputType | null
    _max: CarModelMaxAggregateOutputType | null
  }

  type GetCarModelGroupByPayload<T extends CarModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarModelGroupByOutputType[P]>
            : GetScalarType<T[P], CarModelGroupByOutputType[P]>
        }
      >
    >


  export type CarModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    makeId?: boolean
    make?: boolean | CarMakeDefaultArgs<ExtArgs>
    cars?: boolean | CarModel$carsArgs<ExtArgs>
    _count?: boolean | CarModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carModel"]>

  export type CarModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    makeId?: boolean
    make?: boolean | CarMakeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carModel"]>

  export type CarModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    makeId?: boolean
    make?: boolean | CarMakeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carModel"]>

  export type CarModelSelectScalar = {
    id?: boolean
    name?: boolean
    makeId?: boolean
  }

  export type CarModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "makeId", ExtArgs["result"]["carModel"]>
  export type CarModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    make?: boolean | CarMakeDefaultArgs<ExtArgs>
    cars?: boolean | CarModel$carsArgs<ExtArgs>
    _count?: boolean | CarModelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarModelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    make?: boolean | CarMakeDefaultArgs<ExtArgs>
  }
  export type CarModelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    make?: boolean | CarMakeDefaultArgs<ExtArgs>
  }

  export type $CarModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CarModel"
    objects: {
      make: Prisma.$CarMakePayload<ExtArgs>
      cars: Prisma.$CarsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      makeId: number
    }, ExtArgs["result"]["carModel"]>
    composites: {}
  }

  type CarModelGetPayload<S extends boolean | null | undefined | CarModelDefaultArgs> = $Result.GetResult<Prisma.$CarModelPayload, S>

  type CarModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarModelCountAggregateInputType | true
    }

  export interface CarModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CarModel'], meta: { name: 'CarModel' } }
    /**
     * Find zero or one CarModel that matches the filter.
     * @param {CarModelFindUniqueArgs} args - Arguments to find a CarModel
     * @example
     * // Get one CarModel
     * const carModel = await prisma.carModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarModelFindUniqueArgs>(args: SelectSubset<T, CarModelFindUniqueArgs<ExtArgs>>): Prisma__CarModelClient<$Result.GetResult<Prisma.$CarModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CarModel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarModelFindUniqueOrThrowArgs} args - Arguments to find a CarModel
     * @example
     * // Get one CarModel
     * const carModel = await prisma.carModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarModelFindUniqueOrThrowArgs>(args: SelectSubset<T, CarModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarModelClient<$Result.GetResult<Prisma.$CarModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModelFindFirstArgs} args - Arguments to find a CarModel
     * @example
     * // Get one CarModel
     * const carModel = await prisma.carModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarModelFindFirstArgs>(args?: SelectSubset<T, CarModelFindFirstArgs<ExtArgs>>): Prisma__CarModelClient<$Result.GetResult<Prisma.$CarModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModelFindFirstOrThrowArgs} args - Arguments to find a CarModel
     * @example
     * // Get one CarModel
     * const carModel = await prisma.carModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarModelFindFirstOrThrowArgs>(args?: SelectSubset<T, CarModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarModelClient<$Result.GetResult<Prisma.$CarModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CarModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarModels
     * const carModels = await prisma.carModel.findMany()
     * 
     * // Get first 10 CarModels
     * const carModels = await prisma.carModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carModelWithIdOnly = await prisma.carModel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarModelFindManyArgs>(args?: SelectSubset<T, CarModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CarModel.
     * @param {CarModelCreateArgs} args - Arguments to create a CarModel.
     * @example
     * // Create one CarModel
     * const CarModel = await prisma.carModel.create({
     *   data: {
     *     // ... data to create a CarModel
     *   }
     * })
     * 
     */
    create<T extends CarModelCreateArgs>(args: SelectSubset<T, CarModelCreateArgs<ExtArgs>>): Prisma__CarModelClient<$Result.GetResult<Prisma.$CarModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CarModels.
     * @param {CarModelCreateManyArgs} args - Arguments to create many CarModels.
     * @example
     * // Create many CarModels
     * const carModel = await prisma.carModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarModelCreateManyArgs>(args?: SelectSubset<T, CarModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CarModels and returns the data saved in the database.
     * @param {CarModelCreateManyAndReturnArgs} args - Arguments to create many CarModels.
     * @example
     * // Create many CarModels
     * const carModel = await prisma.carModel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CarModels and only return the `id`
     * const carModelWithIdOnly = await prisma.carModel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarModelCreateManyAndReturnArgs>(args?: SelectSubset<T, CarModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CarModel.
     * @param {CarModelDeleteArgs} args - Arguments to delete one CarModel.
     * @example
     * // Delete one CarModel
     * const CarModel = await prisma.carModel.delete({
     *   where: {
     *     // ... filter to delete one CarModel
     *   }
     * })
     * 
     */
    delete<T extends CarModelDeleteArgs>(args: SelectSubset<T, CarModelDeleteArgs<ExtArgs>>): Prisma__CarModelClient<$Result.GetResult<Prisma.$CarModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CarModel.
     * @param {CarModelUpdateArgs} args - Arguments to update one CarModel.
     * @example
     * // Update one CarModel
     * const carModel = await prisma.carModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarModelUpdateArgs>(args: SelectSubset<T, CarModelUpdateArgs<ExtArgs>>): Prisma__CarModelClient<$Result.GetResult<Prisma.$CarModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CarModels.
     * @param {CarModelDeleteManyArgs} args - Arguments to filter CarModels to delete.
     * @example
     * // Delete a few CarModels
     * const { count } = await prisma.carModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarModelDeleteManyArgs>(args?: SelectSubset<T, CarModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarModels
     * const carModel = await prisma.carModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarModelUpdateManyArgs>(args: SelectSubset<T, CarModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarModels and returns the data updated in the database.
     * @param {CarModelUpdateManyAndReturnArgs} args - Arguments to update many CarModels.
     * @example
     * // Update many CarModels
     * const carModel = await prisma.carModel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CarModels and only return the `id`
     * const carModelWithIdOnly = await prisma.carModel.updateManyAndReturn({
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
    updateManyAndReturn<T extends CarModelUpdateManyAndReturnArgs>(args: SelectSubset<T, CarModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CarModel.
     * @param {CarModelUpsertArgs} args - Arguments to update or create a CarModel.
     * @example
     * // Update or create a CarModel
     * const carModel = await prisma.carModel.upsert({
     *   create: {
     *     // ... data to create a CarModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarModel we want to update
     *   }
     * })
     */
    upsert<T extends CarModelUpsertArgs>(args: SelectSubset<T, CarModelUpsertArgs<ExtArgs>>): Prisma__CarModelClient<$Result.GetResult<Prisma.$CarModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CarModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModelCountArgs} args - Arguments to filter CarModels to count.
     * @example
     * // Count the number of CarModels
     * const count = await prisma.carModel.count({
     *   where: {
     *     // ... the filter for the CarModels we want to count
     *   }
     * })
    **/
    count<T extends CarModelCountArgs>(
      args?: Subset<T, CarModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarModelAggregateArgs>(args: Subset<T, CarModelAggregateArgs>): Prisma.PrismaPromise<GetCarModelAggregateType<T>>

    /**
     * Group by CarModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModelGroupByArgs} args - Group by arguments.
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
      T extends CarModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarModelGroupByArgs['orderBy'] }
        : { orderBy?: CarModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CarModel model
   */
  readonly fields: CarModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    make<T extends CarMakeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarMakeDefaultArgs<ExtArgs>>): Prisma__CarMakeClient<$Result.GetResult<Prisma.$CarMakePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cars<T extends CarModel$carsArgs<ExtArgs> = {}>(args?: Subset<T, CarModel$carsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CarModel model
   */
  interface CarModelFieldRefs {
    readonly id: FieldRef<"CarModel", 'Int'>
    readonly name: FieldRef<"CarModel", 'String'>
    readonly makeId: FieldRef<"CarModel", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CarModel findUnique
   */
  export type CarModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null
    /**
     * Filter, which CarModel to fetch.
     */
    where: CarModelWhereUniqueInput
  }

  /**
   * CarModel findUniqueOrThrow
   */
  export type CarModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null
    /**
     * Filter, which CarModel to fetch.
     */
    where: CarModelWhereUniqueInput
  }

  /**
   * CarModel findFirst
   */
  export type CarModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null
    /**
     * Filter, which CarModel to fetch.
     */
    where?: CarModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarModels to fetch.
     */
    orderBy?: CarModelOrderByWithRelationInput | CarModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarModels.
     */
    cursor?: CarModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarModels.
     */
    distinct?: CarModelScalarFieldEnum | CarModelScalarFieldEnum[]
  }

  /**
   * CarModel findFirstOrThrow
   */
  export type CarModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null
    /**
     * Filter, which CarModel to fetch.
     */
    where?: CarModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarModels to fetch.
     */
    orderBy?: CarModelOrderByWithRelationInput | CarModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarModels.
     */
    cursor?: CarModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarModels.
     */
    distinct?: CarModelScalarFieldEnum | CarModelScalarFieldEnum[]
  }

  /**
   * CarModel findMany
   */
  export type CarModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null
    /**
     * Filter, which CarModels to fetch.
     */
    where?: CarModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarModels to fetch.
     */
    orderBy?: CarModelOrderByWithRelationInput | CarModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CarModels.
     */
    cursor?: CarModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarModels.
     */
    skip?: number
    distinct?: CarModelScalarFieldEnum | CarModelScalarFieldEnum[]
  }

  /**
   * CarModel create
   */
  export type CarModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null
    /**
     * The data needed to create a CarModel.
     */
    data: XOR<CarModelCreateInput, CarModelUncheckedCreateInput>
  }

  /**
   * CarModel createMany
   */
  export type CarModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CarModels.
     */
    data: CarModelCreateManyInput | CarModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CarModel createManyAndReturn
   */
  export type CarModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null
    /**
     * The data used to create many CarModels.
     */
    data: CarModelCreateManyInput | CarModelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CarModel update
   */
  export type CarModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null
    /**
     * The data needed to update a CarModel.
     */
    data: XOR<CarModelUpdateInput, CarModelUncheckedUpdateInput>
    /**
     * Choose, which CarModel to update.
     */
    where: CarModelWhereUniqueInput
  }

  /**
   * CarModel updateMany
   */
  export type CarModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CarModels.
     */
    data: XOR<CarModelUpdateManyMutationInput, CarModelUncheckedUpdateManyInput>
    /**
     * Filter which CarModels to update
     */
    where?: CarModelWhereInput
    /**
     * Limit how many CarModels to update.
     */
    limit?: number
  }

  /**
   * CarModel updateManyAndReturn
   */
  export type CarModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null
    /**
     * The data used to update CarModels.
     */
    data: XOR<CarModelUpdateManyMutationInput, CarModelUncheckedUpdateManyInput>
    /**
     * Filter which CarModels to update
     */
    where?: CarModelWhereInput
    /**
     * Limit how many CarModels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CarModel upsert
   */
  export type CarModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null
    /**
     * The filter to search for the CarModel to update in case it exists.
     */
    where: CarModelWhereUniqueInput
    /**
     * In case the CarModel found by the `where` argument doesn't exist, create a new CarModel with this data.
     */
    create: XOR<CarModelCreateInput, CarModelUncheckedCreateInput>
    /**
     * In case the CarModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarModelUpdateInput, CarModelUncheckedUpdateInput>
  }

  /**
   * CarModel delete
   */
  export type CarModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null
    /**
     * Filter which CarModel to delete.
     */
    where: CarModelWhereUniqueInput
  }

  /**
   * CarModel deleteMany
   */
  export type CarModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarModels to delete
     */
    where?: CarModelWhereInput
    /**
     * Limit how many CarModels to delete.
     */
    limit?: number
  }

  /**
   * CarModel.cars
   */
  export type CarModel$carsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    where?: CarsWhereInput
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    cursor?: CarsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }

  /**
   * CarModel without action
   */
  export type CarModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null
  }


  /**
   * Model Cars
   */

  export type AggregateCars = {
    _count: CarsCountAggregateOutputType | null
    _avg: CarsAvgAggregateOutputType | null
    _sum: CarsSumAggregateOutputType | null
    _min: CarsMinAggregateOutputType | null
    _max: CarsMaxAggregateOutputType | null
  }

  export type CarsAvgAggregateOutputType = {
    id: number | null
    makeId: number | null
    modelId: number | null
    price: number | null
    year: number | null
    mileage: number | null
    userId: number | null
  }

  export type CarsSumAggregateOutputType = {
    id: number | null
    makeId: number | null
    modelId: number | null
    price: number | null
    year: number | null
    mileage: number | null
    userId: number | null
  }

  export type CarsMinAggregateOutputType = {
    id: number | null
    makeId: number | null
    modelId: number | null
    price: number | null
    year: number | null
    mileage: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarsMaxAggregateOutputType = {
    id: number | null
    makeId: number | null
    modelId: number | null
    price: number | null
    year: number | null
    mileage: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarsCountAggregateOutputType = {
    id: number
    makeId: number
    modelId: number
    price: number
    year: number
    mileage: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CarsAvgAggregateInputType = {
    id?: true
    makeId?: true
    modelId?: true
    price?: true
    year?: true
    mileage?: true
    userId?: true
  }

  export type CarsSumAggregateInputType = {
    id?: true
    makeId?: true
    modelId?: true
    price?: true
    year?: true
    mileage?: true
    userId?: true
  }

  export type CarsMinAggregateInputType = {
    id?: true
    makeId?: true
    modelId?: true
    price?: true
    year?: true
    mileage?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarsMaxAggregateInputType = {
    id?: true
    makeId?: true
    modelId?: true
    price?: true
    year?: true
    mileage?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarsCountAggregateInputType = {
    id?: true
    makeId?: true
    modelId?: true
    price?: true
    year?: true
    mileage?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CarsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to aggregate.
     */
    where?: CarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cars
    **/
    _count?: true | CarsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarsMaxAggregateInputType
  }

  export type GetCarsAggregateType<T extends CarsAggregateArgs> = {
        [P in keyof T & keyof AggregateCars]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCars[P]>
      : GetScalarType<T[P], AggregateCars[P]>
  }




  export type CarsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarsWhereInput
    orderBy?: CarsOrderByWithAggregationInput | CarsOrderByWithAggregationInput[]
    by: CarsScalarFieldEnum[] | CarsScalarFieldEnum
    having?: CarsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarsCountAggregateInputType | true
    _avg?: CarsAvgAggregateInputType
    _sum?: CarsSumAggregateInputType
    _min?: CarsMinAggregateInputType
    _max?: CarsMaxAggregateInputType
  }

  export type CarsGroupByOutputType = {
    id: number
    makeId: number
    modelId: number
    price: number
    year: number
    mileage: number
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: CarsCountAggregateOutputType | null
    _avg: CarsAvgAggregateOutputType | null
    _sum: CarsSumAggregateOutputType | null
    _min: CarsMinAggregateOutputType | null
    _max: CarsMaxAggregateOutputType | null
  }

  type GetCarsGroupByPayload<T extends CarsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarsGroupByOutputType[P]>
            : GetScalarType<T[P], CarsGroupByOutputType[P]>
        }
      >
    >


  export type CarsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    makeId?: boolean
    modelId?: boolean
    price?: boolean
    year?: boolean
    mileage?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    make?: boolean | CarMakeDefaultArgs<ExtArgs>
    model?: boolean | CarModelDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    carImages?: boolean | Cars$carImagesArgs<ExtArgs>
    _count?: boolean | CarsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cars"]>

  export type CarsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    makeId?: boolean
    modelId?: boolean
    price?: boolean
    year?: boolean
    mileage?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    make?: boolean | CarMakeDefaultArgs<ExtArgs>
    model?: boolean | CarModelDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cars"]>

  export type CarsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    makeId?: boolean
    modelId?: boolean
    price?: boolean
    year?: boolean
    mileage?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    make?: boolean | CarMakeDefaultArgs<ExtArgs>
    model?: boolean | CarModelDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cars"]>

  export type CarsSelectScalar = {
    id?: boolean
    makeId?: boolean
    modelId?: boolean
    price?: boolean
    year?: boolean
    mileage?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CarsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "makeId" | "modelId" | "price" | "year" | "mileage" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["cars"]>
  export type CarsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    make?: boolean | CarMakeDefaultArgs<ExtArgs>
    model?: boolean | CarModelDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    carImages?: boolean | Cars$carImagesArgs<ExtArgs>
    _count?: boolean | CarsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    make?: boolean | CarMakeDefaultArgs<ExtArgs>
    model?: boolean | CarModelDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CarsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    make?: boolean | CarMakeDefaultArgs<ExtArgs>
    model?: boolean | CarModelDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CarsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cars"
    objects: {
      make: Prisma.$CarMakePayload<ExtArgs>
      model: Prisma.$CarModelPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      carImages: Prisma.$CarImagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      makeId: number
      modelId: number
      price: number
      year: number
      mileage: number
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cars"]>
    composites: {}
  }

  type CarsGetPayload<S extends boolean | null | undefined | CarsDefaultArgs> = $Result.GetResult<Prisma.$CarsPayload, S>

  type CarsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarsCountAggregateInputType | true
    }

  export interface CarsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cars'], meta: { name: 'Cars' } }
    /**
     * Find zero or one Cars that matches the filter.
     * @param {CarsFindUniqueArgs} args - Arguments to find a Cars
     * @example
     * // Get one Cars
     * const cars = await prisma.cars.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarsFindUniqueArgs>(args: SelectSubset<T, CarsFindUniqueArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cars that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarsFindUniqueOrThrowArgs} args - Arguments to find a Cars
     * @example
     * // Get one Cars
     * const cars = await prisma.cars.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarsFindUniqueOrThrowArgs>(args: SelectSubset<T, CarsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsFindFirstArgs} args - Arguments to find a Cars
     * @example
     * // Get one Cars
     * const cars = await prisma.cars.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarsFindFirstArgs>(args?: SelectSubset<T, CarsFindFirstArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cars that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsFindFirstOrThrowArgs} args - Arguments to find a Cars
     * @example
     * // Get one Cars
     * const cars = await prisma.cars.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarsFindFirstOrThrowArgs>(args?: SelectSubset<T, CarsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.cars.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.cars.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carsWithIdOnly = await prisma.cars.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarsFindManyArgs>(args?: SelectSubset<T, CarsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cars.
     * @param {CarsCreateArgs} args - Arguments to create a Cars.
     * @example
     * // Create one Cars
     * const Cars = await prisma.cars.create({
     *   data: {
     *     // ... data to create a Cars
     *   }
     * })
     * 
     */
    create<T extends CarsCreateArgs>(args: SelectSubset<T, CarsCreateArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cars.
     * @param {CarsCreateManyArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const cars = await prisma.cars.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarsCreateManyArgs>(args?: SelectSubset<T, CarsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cars and returns the data saved in the database.
     * @param {CarsCreateManyAndReturnArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const cars = await prisma.cars.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cars and only return the `id`
     * const carsWithIdOnly = await prisma.cars.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarsCreateManyAndReturnArgs>(args?: SelectSubset<T, CarsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cars.
     * @param {CarsDeleteArgs} args - Arguments to delete one Cars.
     * @example
     * // Delete one Cars
     * const Cars = await prisma.cars.delete({
     *   where: {
     *     // ... filter to delete one Cars
     *   }
     * })
     * 
     */
    delete<T extends CarsDeleteArgs>(args: SelectSubset<T, CarsDeleteArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cars.
     * @param {CarsUpdateArgs} args - Arguments to update one Cars.
     * @example
     * // Update one Cars
     * const cars = await prisma.cars.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarsUpdateArgs>(args: SelectSubset<T, CarsUpdateArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cars.
     * @param {CarsDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.cars.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarsDeleteManyArgs>(args?: SelectSubset<T, CarsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const cars = await prisma.cars.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarsUpdateManyArgs>(args: SelectSubset<T, CarsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars and returns the data updated in the database.
     * @param {CarsUpdateManyAndReturnArgs} args - Arguments to update many Cars.
     * @example
     * // Update many Cars
     * const cars = await prisma.cars.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cars and only return the `id`
     * const carsWithIdOnly = await prisma.cars.updateManyAndReturn({
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
    updateManyAndReturn<T extends CarsUpdateManyAndReturnArgs>(args: SelectSubset<T, CarsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cars.
     * @param {CarsUpsertArgs} args - Arguments to update or create a Cars.
     * @example
     * // Update or create a Cars
     * const cars = await prisma.cars.upsert({
     *   create: {
     *     // ... data to create a Cars
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cars we want to update
     *   }
     * })
     */
    upsert<T extends CarsUpsertArgs>(args: SelectSubset<T, CarsUpsertArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.cars.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends CarsCountArgs>(
      args?: Subset<T, CarsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarsAggregateArgs>(args: Subset<T, CarsAggregateArgs>): Prisma.PrismaPromise<GetCarsAggregateType<T>>

    /**
     * Group by Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsGroupByArgs} args - Group by arguments.
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
      T extends CarsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarsGroupByArgs['orderBy'] }
        : { orderBy?: CarsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cars model
   */
  readonly fields: CarsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cars.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    make<T extends CarMakeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarMakeDefaultArgs<ExtArgs>>): Prisma__CarMakeClient<$Result.GetResult<Prisma.$CarMakePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    model<T extends CarModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarModelDefaultArgs<ExtArgs>>): Prisma__CarModelClient<$Result.GetResult<Prisma.$CarModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    carImages<T extends Cars$carImagesArgs<ExtArgs> = {}>(args?: Subset<T, Cars$carImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cars model
   */
  interface CarsFieldRefs {
    readonly id: FieldRef<"Cars", 'Int'>
    readonly makeId: FieldRef<"Cars", 'Int'>
    readonly modelId: FieldRef<"Cars", 'Int'>
    readonly price: FieldRef<"Cars", 'Int'>
    readonly year: FieldRef<"Cars", 'Int'>
    readonly mileage: FieldRef<"Cars", 'Int'>
    readonly userId: FieldRef<"Cars", 'Int'>
    readonly createdAt: FieldRef<"Cars", 'DateTime'>
    readonly updatedAt: FieldRef<"Cars", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cars findUnique
   */
  export type CarsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where: CarsWhereUniqueInput
  }

  /**
   * Cars findUniqueOrThrow
   */
  export type CarsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where: CarsWhereUniqueInput
  }

  /**
   * Cars findFirst
   */
  export type CarsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }

  /**
   * Cars findFirstOrThrow
   */
  export type CarsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }

  /**
   * Cars findMany
   */
  export type CarsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cars.
     */
    cursor?: CarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }

  /**
   * Cars create
   */
  export type CarsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * The data needed to create a Cars.
     */
    data: XOR<CarsCreateInput, CarsUncheckedCreateInput>
  }

  /**
   * Cars createMany
   */
  export type CarsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cars.
     */
    data: CarsCreateManyInput | CarsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cars createManyAndReturn
   */
  export type CarsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * The data used to create many Cars.
     */
    data: CarsCreateManyInput | CarsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cars update
   */
  export type CarsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * The data needed to update a Cars.
     */
    data: XOR<CarsUpdateInput, CarsUncheckedUpdateInput>
    /**
     * Choose, which Cars to update.
     */
    where: CarsWhereUniqueInput
  }

  /**
   * Cars updateMany
   */
  export type CarsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarsUpdateManyMutationInput, CarsUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarsWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Cars updateManyAndReturn
   */
  export type CarsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * The data used to update Cars.
     */
    data: XOR<CarsUpdateManyMutationInput, CarsUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarsWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cars upsert
   */
  export type CarsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * The filter to search for the Cars to update in case it exists.
     */
    where: CarsWhereUniqueInput
    /**
     * In case the Cars found by the `where` argument doesn't exist, create a new Cars with this data.
     */
    create: XOR<CarsCreateInput, CarsUncheckedCreateInput>
    /**
     * In case the Cars was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarsUpdateInput, CarsUncheckedUpdateInput>
  }

  /**
   * Cars delete
   */
  export type CarsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter which Cars to delete.
     */
    where: CarsWhereUniqueInput
  }

  /**
   * Cars deleteMany
   */
  export type CarsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to delete
     */
    where?: CarsWhereInput
    /**
     * Limit how many Cars to delete.
     */
    limit?: number
  }

  /**
   * Cars.carImages
   */
  export type Cars$carImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarImages
     */
    select?: CarImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarImages
     */
    omit?: CarImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarImagesInclude<ExtArgs> | null
    where?: CarImagesWhereInput
    orderBy?: CarImagesOrderByWithRelationInput | CarImagesOrderByWithRelationInput[]
    cursor?: CarImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarImagesScalarFieldEnum | CarImagesScalarFieldEnum[]
  }

  /**
   * Cars without action
   */
  export type CarsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
  }


  /**
   * Model CarImages
   */

  export type AggregateCarImages = {
    _count: CarImagesCountAggregateOutputType | null
    _avg: CarImagesAvgAggregateOutputType | null
    _sum: CarImagesSumAggregateOutputType | null
    _min: CarImagesMinAggregateOutputType | null
    _max: CarImagesMaxAggregateOutputType | null
  }

  export type CarImagesAvgAggregateOutputType = {
    id: number | null
    carId: number | null
    imageId: number | null
  }

  export type CarImagesSumAggregateOutputType = {
    id: number | null
    carId: number | null
    imageId: number | null
  }

  export type CarImagesMinAggregateOutputType = {
    id: number | null
    carId: number | null
    imageId: number | null
  }

  export type CarImagesMaxAggregateOutputType = {
    id: number | null
    carId: number | null
    imageId: number | null
  }

  export type CarImagesCountAggregateOutputType = {
    id: number
    carId: number
    imageId: number
    _all: number
  }


  export type CarImagesAvgAggregateInputType = {
    id?: true
    carId?: true
    imageId?: true
  }

  export type CarImagesSumAggregateInputType = {
    id?: true
    carId?: true
    imageId?: true
  }

  export type CarImagesMinAggregateInputType = {
    id?: true
    carId?: true
    imageId?: true
  }

  export type CarImagesMaxAggregateInputType = {
    id?: true
    carId?: true
    imageId?: true
  }

  export type CarImagesCountAggregateInputType = {
    id?: true
    carId?: true
    imageId?: true
    _all?: true
  }

  export type CarImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarImages to aggregate.
     */
    where?: CarImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarImages to fetch.
     */
    orderBy?: CarImagesOrderByWithRelationInput | CarImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CarImages
    **/
    _count?: true | CarImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarImagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarImagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarImagesMaxAggregateInputType
  }

  export type GetCarImagesAggregateType<T extends CarImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateCarImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarImages[P]>
      : GetScalarType<T[P], AggregateCarImages[P]>
  }




  export type CarImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarImagesWhereInput
    orderBy?: CarImagesOrderByWithAggregationInput | CarImagesOrderByWithAggregationInput[]
    by: CarImagesScalarFieldEnum[] | CarImagesScalarFieldEnum
    having?: CarImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarImagesCountAggregateInputType | true
    _avg?: CarImagesAvgAggregateInputType
    _sum?: CarImagesSumAggregateInputType
    _min?: CarImagesMinAggregateInputType
    _max?: CarImagesMaxAggregateInputType
  }

  export type CarImagesGroupByOutputType = {
    id: number
    carId: number
    imageId: number
    _count: CarImagesCountAggregateOutputType | null
    _avg: CarImagesAvgAggregateOutputType | null
    _sum: CarImagesSumAggregateOutputType | null
    _min: CarImagesMinAggregateOutputType | null
    _max: CarImagesMaxAggregateOutputType | null
  }

  type GetCarImagesGroupByPayload<T extends CarImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarImagesGroupByOutputType[P]>
            : GetScalarType<T[P], CarImagesGroupByOutputType[P]>
        }
      >
    >


  export type CarImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    imageId?: boolean
    car?: boolean | CarsDefaultArgs<ExtArgs>
    images?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carImages"]>

  export type CarImagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    imageId?: boolean
    car?: boolean | CarsDefaultArgs<ExtArgs>
    images?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carImages"]>

  export type CarImagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    imageId?: boolean
    car?: boolean | CarsDefaultArgs<ExtArgs>
    images?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carImages"]>

  export type CarImagesSelectScalar = {
    id?: boolean
    carId?: boolean
    imageId?: boolean
  }

  export type CarImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carId" | "imageId", ExtArgs["result"]["carImages"]>
  export type CarImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarsDefaultArgs<ExtArgs>
    images?: boolean | ImageDefaultArgs<ExtArgs>
  }
  export type CarImagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarsDefaultArgs<ExtArgs>
    images?: boolean | ImageDefaultArgs<ExtArgs>
  }
  export type CarImagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarsDefaultArgs<ExtArgs>
    images?: boolean | ImageDefaultArgs<ExtArgs>
  }

  export type $CarImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CarImages"
    objects: {
      car: Prisma.$CarsPayload<ExtArgs>
      images: Prisma.$ImagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      carId: number
      imageId: number
    }, ExtArgs["result"]["carImages"]>
    composites: {}
  }

  type CarImagesGetPayload<S extends boolean | null | undefined | CarImagesDefaultArgs> = $Result.GetResult<Prisma.$CarImagesPayload, S>

  type CarImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarImagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarImagesCountAggregateInputType | true
    }

  export interface CarImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CarImages'], meta: { name: 'CarImages' } }
    /**
     * Find zero or one CarImages that matches the filter.
     * @param {CarImagesFindUniqueArgs} args - Arguments to find a CarImages
     * @example
     * // Get one CarImages
     * const carImages = await prisma.carImages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarImagesFindUniqueArgs>(args: SelectSubset<T, CarImagesFindUniqueArgs<ExtArgs>>): Prisma__CarImagesClient<$Result.GetResult<Prisma.$CarImagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CarImages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarImagesFindUniqueOrThrowArgs} args - Arguments to find a CarImages
     * @example
     * // Get one CarImages
     * const carImages = await prisma.carImages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarImagesFindUniqueOrThrowArgs>(args: SelectSubset<T, CarImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarImagesClient<$Result.GetResult<Prisma.$CarImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarImagesFindFirstArgs} args - Arguments to find a CarImages
     * @example
     * // Get one CarImages
     * const carImages = await prisma.carImages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarImagesFindFirstArgs>(args?: SelectSubset<T, CarImagesFindFirstArgs<ExtArgs>>): Prisma__CarImagesClient<$Result.GetResult<Prisma.$CarImagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarImages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarImagesFindFirstOrThrowArgs} args - Arguments to find a CarImages
     * @example
     * // Get one CarImages
     * const carImages = await prisma.carImages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarImagesFindFirstOrThrowArgs>(args?: SelectSubset<T, CarImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarImagesClient<$Result.GetResult<Prisma.$CarImagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CarImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarImages
     * const carImages = await prisma.carImages.findMany()
     * 
     * // Get first 10 CarImages
     * const carImages = await prisma.carImages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carImagesWithIdOnly = await prisma.carImages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarImagesFindManyArgs>(args?: SelectSubset<T, CarImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CarImages.
     * @param {CarImagesCreateArgs} args - Arguments to create a CarImages.
     * @example
     * // Create one CarImages
     * const CarImages = await prisma.carImages.create({
     *   data: {
     *     // ... data to create a CarImages
     *   }
     * })
     * 
     */
    create<T extends CarImagesCreateArgs>(args: SelectSubset<T, CarImagesCreateArgs<ExtArgs>>): Prisma__CarImagesClient<$Result.GetResult<Prisma.$CarImagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CarImages.
     * @param {CarImagesCreateManyArgs} args - Arguments to create many CarImages.
     * @example
     * // Create many CarImages
     * const carImages = await prisma.carImages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarImagesCreateManyArgs>(args?: SelectSubset<T, CarImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CarImages and returns the data saved in the database.
     * @param {CarImagesCreateManyAndReturnArgs} args - Arguments to create many CarImages.
     * @example
     * // Create many CarImages
     * const carImages = await prisma.carImages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CarImages and only return the `id`
     * const carImagesWithIdOnly = await prisma.carImages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarImagesCreateManyAndReturnArgs>(args?: SelectSubset<T, CarImagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarImagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CarImages.
     * @param {CarImagesDeleteArgs} args - Arguments to delete one CarImages.
     * @example
     * // Delete one CarImages
     * const CarImages = await prisma.carImages.delete({
     *   where: {
     *     // ... filter to delete one CarImages
     *   }
     * })
     * 
     */
    delete<T extends CarImagesDeleteArgs>(args: SelectSubset<T, CarImagesDeleteArgs<ExtArgs>>): Prisma__CarImagesClient<$Result.GetResult<Prisma.$CarImagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CarImages.
     * @param {CarImagesUpdateArgs} args - Arguments to update one CarImages.
     * @example
     * // Update one CarImages
     * const carImages = await prisma.carImages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarImagesUpdateArgs>(args: SelectSubset<T, CarImagesUpdateArgs<ExtArgs>>): Prisma__CarImagesClient<$Result.GetResult<Prisma.$CarImagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CarImages.
     * @param {CarImagesDeleteManyArgs} args - Arguments to filter CarImages to delete.
     * @example
     * // Delete a few CarImages
     * const { count } = await prisma.carImages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarImagesDeleteManyArgs>(args?: SelectSubset<T, CarImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarImages
     * const carImages = await prisma.carImages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarImagesUpdateManyArgs>(args: SelectSubset<T, CarImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarImages and returns the data updated in the database.
     * @param {CarImagesUpdateManyAndReturnArgs} args - Arguments to update many CarImages.
     * @example
     * // Update many CarImages
     * const carImages = await prisma.carImages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CarImages and only return the `id`
     * const carImagesWithIdOnly = await prisma.carImages.updateManyAndReturn({
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
    updateManyAndReturn<T extends CarImagesUpdateManyAndReturnArgs>(args: SelectSubset<T, CarImagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarImagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CarImages.
     * @param {CarImagesUpsertArgs} args - Arguments to update or create a CarImages.
     * @example
     * // Update or create a CarImages
     * const carImages = await prisma.carImages.upsert({
     *   create: {
     *     // ... data to create a CarImages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarImages we want to update
     *   }
     * })
     */
    upsert<T extends CarImagesUpsertArgs>(args: SelectSubset<T, CarImagesUpsertArgs<ExtArgs>>): Prisma__CarImagesClient<$Result.GetResult<Prisma.$CarImagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CarImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarImagesCountArgs} args - Arguments to filter CarImages to count.
     * @example
     * // Count the number of CarImages
     * const count = await prisma.carImages.count({
     *   where: {
     *     // ... the filter for the CarImages we want to count
     *   }
     * })
    **/
    count<T extends CarImagesCountArgs>(
      args?: Subset<T, CarImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarImagesAggregateArgs>(args: Subset<T, CarImagesAggregateArgs>): Prisma.PrismaPromise<GetCarImagesAggregateType<T>>

    /**
     * Group by CarImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarImagesGroupByArgs} args - Group by arguments.
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
      T extends CarImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarImagesGroupByArgs['orderBy'] }
        : { orderBy?: CarImagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CarImages model
   */
  readonly fields: CarImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarImages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends CarsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarsDefaultArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends ImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImageDefaultArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CarImages model
   */
  interface CarImagesFieldRefs {
    readonly id: FieldRef<"CarImages", 'Int'>
    readonly carId: FieldRef<"CarImages", 'Int'>
    readonly imageId: FieldRef<"CarImages", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CarImages findUnique
   */
  export type CarImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarImages
     */
    select?: CarImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarImages
     */
    omit?: CarImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarImagesInclude<ExtArgs> | null
    /**
     * Filter, which CarImages to fetch.
     */
    where: CarImagesWhereUniqueInput
  }

  /**
   * CarImages findUniqueOrThrow
   */
  export type CarImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarImages
     */
    select?: CarImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarImages
     */
    omit?: CarImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarImagesInclude<ExtArgs> | null
    /**
     * Filter, which CarImages to fetch.
     */
    where: CarImagesWhereUniqueInput
  }

  /**
   * CarImages findFirst
   */
  export type CarImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarImages
     */
    select?: CarImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarImages
     */
    omit?: CarImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarImagesInclude<ExtArgs> | null
    /**
     * Filter, which CarImages to fetch.
     */
    where?: CarImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarImages to fetch.
     */
    orderBy?: CarImagesOrderByWithRelationInput | CarImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarImages.
     */
    cursor?: CarImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarImages.
     */
    distinct?: CarImagesScalarFieldEnum | CarImagesScalarFieldEnum[]
  }

  /**
   * CarImages findFirstOrThrow
   */
  export type CarImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarImages
     */
    select?: CarImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarImages
     */
    omit?: CarImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarImagesInclude<ExtArgs> | null
    /**
     * Filter, which CarImages to fetch.
     */
    where?: CarImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarImages to fetch.
     */
    orderBy?: CarImagesOrderByWithRelationInput | CarImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarImages.
     */
    cursor?: CarImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarImages.
     */
    distinct?: CarImagesScalarFieldEnum | CarImagesScalarFieldEnum[]
  }

  /**
   * CarImages findMany
   */
  export type CarImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarImages
     */
    select?: CarImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarImages
     */
    omit?: CarImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarImagesInclude<ExtArgs> | null
    /**
     * Filter, which CarImages to fetch.
     */
    where?: CarImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarImages to fetch.
     */
    orderBy?: CarImagesOrderByWithRelationInput | CarImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CarImages.
     */
    cursor?: CarImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarImages.
     */
    skip?: number
    distinct?: CarImagesScalarFieldEnum | CarImagesScalarFieldEnum[]
  }

  /**
   * CarImages create
   */
  export type CarImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarImages
     */
    select?: CarImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarImages
     */
    omit?: CarImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a CarImages.
     */
    data: XOR<CarImagesCreateInput, CarImagesUncheckedCreateInput>
  }

  /**
   * CarImages createMany
   */
  export type CarImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CarImages.
     */
    data: CarImagesCreateManyInput | CarImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CarImages createManyAndReturn
   */
  export type CarImagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarImages
     */
    select?: CarImagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarImages
     */
    omit?: CarImagesOmit<ExtArgs> | null
    /**
     * The data used to create many CarImages.
     */
    data: CarImagesCreateManyInput | CarImagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarImagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CarImages update
   */
  export type CarImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarImages
     */
    select?: CarImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarImages
     */
    omit?: CarImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a CarImages.
     */
    data: XOR<CarImagesUpdateInput, CarImagesUncheckedUpdateInput>
    /**
     * Choose, which CarImages to update.
     */
    where: CarImagesWhereUniqueInput
  }

  /**
   * CarImages updateMany
   */
  export type CarImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CarImages.
     */
    data: XOR<CarImagesUpdateManyMutationInput, CarImagesUncheckedUpdateManyInput>
    /**
     * Filter which CarImages to update
     */
    where?: CarImagesWhereInput
    /**
     * Limit how many CarImages to update.
     */
    limit?: number
  }

  /**
   * CarImages updateManyAndReturn
   */
  export type CarImagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarImages
     */
    select?: CarImagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarImages
     */
    omit?: CarImagesOmit<ExtArgs> | null
    /**
     * The data used to update CarImages.
     */
    data: XOR<CarImagesUpdateManyMutationInput, CarImagesUncheckedUpdateManyInput>
    /**
     * Filter which CarImages to update
     */
    where?: CarImagesWhereInput
    /**
     * Limit how many CarImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarImagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CarImages upsert
   */
  export type CarImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarImages
     */
    select?: CarImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarImages
     */
    omit?: CarImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the CarImages to update in case it exists.
     */
    where: CarImagesWhereUniqueInput
    /**
     * In case the CarImages found by the `where` argument doesn't exist, create a new CarImages with this data.
     */
    create: XOR<CarImagesCreateInput, CarImagesUncheckedCreateInput>
    /**
     * In case the CarImages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarImagesUpdateInput, CarImagesUncheckedUpdateInput>
  }

  /**
   * CarImages delete
   */
  export type CarImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarImages
     */
    select?: CarImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarImages
     */
    omit?: CarImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarImagesInclude<ExtArgs> | null
    /**
     * Filter which CarImages to delete.
     */
    where: CarImagesWhereUniqueInput
  }

  /**
   * CarImages deleteMany
   */
  export type CarImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarImages to delete
     */
    where?: CarImagesWhereInput
    /**
     * Limit how many CarImages to delete.
     */
    limit?: number
  }

  /**
   * CarImages without action
   */
  export type CarImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarImages
     */
    select?: CarImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarImages
     */
    omit?: CarImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarImagesInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    firstname: string | null
    lastname: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    firstname: string | null
    lastname: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    firstname: number
    lastname: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    firstname?: true
    lastname?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    firstname?: true
    lastname?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    firstname?: true
    lastname?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    firstname: string
    lastname: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cars?: boolean | User$carsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "firstname" | "lastname" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | User$carsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      cars: Prisma.$CarsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      firstname: string
      lastname: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cars<T extends User$carsArgs<ExtArgs> = {}>(args?: Subset<T, User$carsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.cars
   */
  export type User$carsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    where?: CarsWhereInput
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    cursor?: CarsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Entity
   */

  export type AggregateEntity = {
    _count: EntityCountAggregateOutputType | null
    _avg: EntityAvgAggregateOutputType | null
    _sum: EntitySumAggregateOutputType | null
    _min: EntityMinAggregateOutputType | null
    _max: EntityMaxAggregateOutputType | null
  }

  export type EntityAvgAggregateOutputType = {
    id: number | null
  }

  export type EntitySumAggregateOutputType = {
    id: number | null
  }

  export type EntityMinAggregateOutputType = {
    id: number | null
    registrationnumber: string | null
  }

  export type EntityMaxAggregateOutputType = {
    id: number | null
    registrationnumber: string | null
  }

  export type EntityCountAggregateOutputType = {
    id: number
    registrationnumber: number
    _all: number
  }


  export type EntityAvgAggregateInputType = {
    id?: true
  }

  export type EntitySumAggregateInputType = {
    id?: true
  }

  export type EntityMinAggregateInputType = {
    id?: true
    registrationnumber?: true
  }

  export type EntityMaxAggregateInputType = {
    id?: true
    registrationnumber?: true
  }

  export type EntityCountAggregateInputType = {
    id?: true
    registrationnumber?: true
    _all?: true
  }

  export type EntityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entity to aggregate.
     */
    where?: EntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entities to fetch.
     */
    orderBy?: EntityOrderByWithRelationInput | EntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entities
    **/
    _count?: true | EntityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntityMaxAggregateInputType
  }

  export type GetEntityAggregateType<T extends EntityAggregateArgs> = {
        [P in keyof T & keyof AggregateEntity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntity[P]>
      : GetScalarType<T[P], AggregateEntity[P]>
  }




  export type EntityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntityWhereInput
    orderBy?: EntityOrderByWithAggregationInput | EntityOrderByWithAggregationInput[]
    by: EntityScalarFieldEnum[] | EntityScalarFieldEnum
    having?: EntityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntityCountAggregateInputType | true
    _avg?: EntityAvgAggregateInputType
    _sum?: EntitySumAggregateInputType
    _min?: EntityMinAggregateInputType
    _max?: EntityMaxAggregateInputType
  }

  export type EntityGroupByOutputType = {
    id: number
    registrationnumber: string
    _count: EntityCountAggregateOutputType | null
    _avg: EntityAvgAggregateOutputType | null
    _sum: EntitySumAggregateOutputType | null
    _min: EntityMinAggregateOutputType | null
    _max: EntityMaxAggregateOutputType | null
  }

  type GetEntityGroupByPayload<T extends EntityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntityGroupByOutputType[P]>
            : GetScalarType<T[P], EntityGroupByOutputType[P]>
        }
      >
    >


  export type EntitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrationnumber?: boolean
  }, ExtArgs["result"]["entity"]>

  export type EntitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrationnumber?: boolean
  }, ExtArgs["result"]["entity"]>

  export type EntitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrationnumber?: boolean
  }, ExtArgs["result"]["entity"]>

  export type EntitySelectScalar = {
    id?: boolean
    registrationnumber?: boolean
  }

  export type EntityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "registrationnumber", ExtArgs["result"]["entity"]>

  export type $EntityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entity"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      registrationnumber: string
    }, ExtArgs["result"]["entity"]>
    composites: {}
  }

  type EntityGetPayload<S extends boolean | null | undefined | EntityDefaultArgs> = $Result.GetResult<Prisma.$EntityPayload, S>

  type EntityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntityCountAggregateInputType | true
    }

  export interface EntityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entity'], meta: { name: 'Entity' } }
    /**
     * Find zero or one Entity that matches the filter.
     * @param {EntityFindUniqueArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntityFindUniqueArgs>(args: SelectSubset<T, EntityFindUniqueArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntityFindUniqueOrThrowArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntityFindUniqueOrThrowArgs>(args: SelectSubset<T, EntityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityFindFirstArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntityFindFirstArgs>(args?: SelectSubset<T, EntityFindFirstArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityFindFirstOrThrowArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntityFindFirstOrThrowArgs>(args?: SelectSubset<T, EntityFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entities
     * const entities = await prisma.entity.findMany()
     * 
     * // Get first 10 Entities
     * const entities = await prisma.entity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entityWithIdOnly = await prisma.entity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntityFindManyArgs>(args?: SelectSubset<T, EntityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entity.
     * @param {EntityCreateArgs} args - Arguments to create a Entity.
     * @example
     * // Create one Entity
     * const Entity = await prisma.entity.create({
     *   data: {
     *     // ... data to create a Entity
     *   }
     * })
     * 
     */
    create<T extends EntityCreateArgs>(args: SelectSubset<T, EntityCreateArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entities.
     * @param {EntityCreateManyArgs} args - Arguments to create many Entities.
     * @example
     * // Create many Entities
     * const entity = await prisma.entity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntityCreateManyArgs>(args?: SelectSubset<T, EntityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entities and returns the data saved in the database.
     * @param {EntityCreateManyAndReturnArgs} args - Arguments to create many Entities.
     * @example
     * // Create many Entities
     * const entity = await prisma.entity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entities and only return the `id`
     * const entityWithIdOnly = await prisma.entity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EntityCreateManyAndReturnArgs>(args?: SelectSubset<T, EntityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Entity.
     * @param {EntityDeleteArgs} args - Arguments to delete one Entity.
     * @example
     * // Delete one Entity
     * const Entity = await prisma.entity.delete({
     *   where: {
     *     // ... filter to delete one Entity
     *   }
     * })
     * 
     */
    delete<T extends EntityDeleteArgs>(args: SelectSubset<T, EntityDeleteArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entity.
     * @param {EntityUpdateArgs} args - Arguments to update one Entity.
     * @example
     * // Update one Entity
     * const entity = await prisma.entity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntityUpdateArgs>(args: SelectSubset<T, EntityUpdateArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entities.
     * @param {EntityDeleteManyArgs} args - Arguments to filter Entities to delete.
     * @example
     * // Delete a few Entities
     * const { count } = await prisma.entity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntityDeleteManyArgs>(args?: SelectSubset<T, EntityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entities
     * const entity = await prisma.entity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntityUpdateManyArgs>(args: SelectSubset<T, EntityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entities and returns the data updated in the database.
     * @param {EntityUpdateManyAndReturnArgs} args - Arguments to update many Entities.
     * @example
     * // Update many Entities
     * const entity = await prisma.entity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Entities and only return the `id`
     * const entityWithIdOnly = await prisma.entity.updateManyAndReturn({
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
    updateManyAndReturn<T extends EntityUpdateManyAndReturnArgs>(args: SelectSubset<T, EntityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Entity.
     * @param {EntityUpsertArgs} args - Arguments to update or create a Entity.
     * @example
     * // Update or create a Entity
     * const entity = await prisma.entity.upsert({
     *   create: {
     *     // ... data to create a Entity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entity we want to update
     *   }
     * })
     */
    upsert<T extends EntityUpsertArgs>(args: SelectSubset<T, EntityUpsertArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityCountArgs} args - Arguments to filter Entities to count.
     * @example
     * // Count the number of Entities
     * const count = await prisma.entity.count({
     *   where: {
     *     // ... the filter for the Entities we want to count
     *   }
     * })
    **/
    count<T extends EntityCountArgs>(
      args?: Subset<T, EntityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EntityAggregateArgs>(args: Subset<T, EntityAggregateArgs>): Prisma.PrismaPromise<GetEntityAggregateType<T>>

    /**
     * Group by Entity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityGroupByArgs} args - Group by arguments.
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
      T extends EntityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntityGroupByArgs['orderBy'] }
        : { orderBy?: EntityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EntityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entity model
   */
  readonly fields: EntityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Entity model
   */
  interface EntityFieldRefs {
    readonly id: FieldRef<"Entity", 'Int'>
    readonly registrationnumber: FieldRef<"Entity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Entity findUnique
   */
  export type EntityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Filter, which Entity to fetch.
     */
    where: EntityWhereUniqueInput
  }

  /**
   * Entity findUniqueOrThrow
   */
  export type EntityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Filter, which Entity to fetch.
     */
    where: EntityWhereUniqueInput
  }

  /**
   * Entity findFirst
   */
  export type EntityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Filter, which Entity to fetch.
     */
    where?: EntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entities to fetch.
     */
    orderBy?: EntityOrderByWithRelationInput | EntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entities.
     */
    cursor?: EntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entities.
     */
    distinct?: EntityScalarFieldEnum | EntityScalarFieldEnum[]
  }

  /**
   * Entity findFirstOrThrow
   */
  export type EntityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Filter, which Entity to fetch.
     */
    where?: EntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entities to fetch.
     */
    orderBy?: EntityOrderByWithRelationInput | EntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entities.
     */
    cursor?: EntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entities.
     */
    distinct?: EntityScalarFieldEnum | EntityScalarFieldEnum[]
  }

  /**
   * Entity findMany
   */
  export type EntityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Filter, which Entities to fetch.
     */
    where?: EntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entities to fetch.
     */
    orderBy?: EntityOrderByWithRelationInput | EntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entities.
     */
    cursor?: EntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entities.
     */
    skip?: number
    distinct?: EntityScalarFieldEnum | EntityScalarFieldEnum[]
  }

  /**
   * Entity create
   */
  export type EntityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * The data needed to create a Entity.
     */
    data: XOR<EntityCreateInput, EntityUncheckedCreateInput>
  }

  /**
   * Entity createMany
   */
  export type EntityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entities.
     */
    data: EntityCreateManyInput | EntityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entity createManyAndReturn
   */
  export type EntityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * The data used to create many Entities.
     */
    data: EntityCreateManyInput | EntityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entity update
   */
  export type EntityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * The data needed to update a Entity.
     */
    data: XOR<EntityUpdateInput, EntityUncheckedUpdateInput>
    /**
     * Choose, which Entity to update.
     */
    where: EntityWhereUniqueInput
  }

  /**
   * Entity updateMany
   */
  export type EntityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entities.
     */
    data: XOR<EntityUpdateManyMutationInput, EntityUncheckedUpdateManyInput>
    /**
     * Filter which Entities to update
     */
    where?: EntityWhereInput
    /**
     * Limit how many Entities to update.
     */
    limit?: number
  }

  /**
   * Entity updateManyAndReturn
   */
  export type EntityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * The data used to update Entities.
     */
    data: XOR<EntityUpdateManyMutationInput, EntityUncheckedUpdateManyInput>
    /**
     * Filter which Entities to update
     */
    where?: EntityWhereInput
    /**
     * Limit how many Entities to update.
     */
    limit?: number
  }

  /**
   * Entity upsert
   */
  export type EntityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * The filter to search for the Entity to update in case it exists.
     */
    where: EntityWhereUniqueInput
    /**
     * In case the Entity found by the `where` argument doesn't exist, create a new Entity with this data.
     */
    create: XOR<EntityCreateInput, EntityUncheckedCreateInput>
    /**
     * In case the Entity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntityUpdateInput, EntityUncheckedUpdateInput>
  }

  /**
   * Entity delete
   */
  export type EntityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Filter which Entity to delete.
     */
    where: EntityWhereUniqueInput
  }

  /**
   * Entity deleteMany
   */
  export type EntityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entities to delete
     */
    where?: EntityWhereInput
    /**
     * Limit how many Entities to delete.
     */
    limit?: number
  }

  /**
   * Entity without action
   */
  export type EntityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
  }


  /**
   * Model File
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileAvgAggregateOutputType = {
    id: number | null
    size: number | null
  }

  export type FileSumAggregateOutputType = {
    id: number | null
    size: number | null
  }

  export type FileMinAggregateOutputType = {
    id: number | null
    url: string | null
    mimeType: string | null
    size: number | null
    createdAt: Date | null
    toDeleteAt: Date | null
  }

  export type FileMaxAggregateOutputType = {
    id: number | null
    url: string | null
    mimeType: string | null
    size: number | null
    createdAt: Date | null
    toDeleteAt: Date | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    url: number
    mimeType: number
    size: number
    createdAt: number
    toDeleteAt: number
    _all: number
  }


  export type FileAvgAggregateInputType = {
    id?: true
    size?: true
  }

  export type FileSumAggregateInputType = {
    id?: true
    size?: true
  }

  export type FileMinAggregateInputType = {
    id?: true
    url?: true
    mimeType?: true
    size?: true
    createdAt?: true
    toDeleteAt?: true
  }

  export type FileMaxAggregateInputType = {
    id?: true
    url?: true
    mimeType?: true
    size?: true
    createdAt?: true
    toDeleteAt?: true
  }

  export type FileCountAggregateInputType = {
    id?: true
    url?: true
    mimeType?: true
    size?: true
    createdAt?: true
    toDeleteAt?: true
    _all?: true
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
    orderBy?: FileOrderByWithAggregationInput | FileOrderByWithAggregationInput[]
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _avg?: FileAvgAggregateInputType
    _sum?: FileSumAggregateInputType
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    id: number
    url: string
    mimeType: string
    size: number
    createdAt: Date
    toDeleteAt: Date
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    mimeType?: boolean
    size?: boolean
    createdAt?: boolean
    toDeleteAt?: boolean
    s240Images?: boolean | File$s240ImagesArgs<ExtArgs>
    s480Images?: boolean | File$s480ImagesArgs<ExtArgs>
    s720Images?: boolean | File$s720ImagesArgs<ExtArgs>
    s1080Images?: boolean | File$s1080ImagesArgs<ExtArgs>
    _count?: boolean | FileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    mimeType?: boolean
    size?: boolean
    createdAt?: boolean
    toDeleteAt?: boolean
  }, ExtArgs["result"]["file"]>

  export type FileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    mimeType?: boolean
    size?: boolean
    createdAt?: boolean
    toDeleteAt?: boolean
  }, ExtArgs["result"]["file"]>

  export type FileSelectScalar = {
    id?: boolean
    url?: boolean
    mimeType?: boolean
    size?: boolean
    createdAt?: boolean
    toDeleteAt?: boolean
  }

  export type FileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "mimeType" | "size" | "createdAt" | "toDeleteAt", ExtArgs["result"]["file"]>
  export type FileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    s240Images?: boolean | File$s240ImagesArgs<ExtArgs>
    s480Images?: boolean | File$s480ImagesArgs<ExtArgs>
    s720Images?: boolean | File$s720ImagesArgs<ExtArgs>
    s1080Images?: boolean | File$s1080ImagesArgs<ExtArgs>
    _count?: boolean | FileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "File"
    objects: {
      s240Images: Prisma.$ImagePayload<ExtArgs>[]
      s480Images: Prisma.$ImagePayload<ExtArgs>[]
      s720Images: Prisma.$ImagePayload<ExtArgs>[]
      s1080Images: Prisma.$ImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      mimeType: string
      size: number
      createdAt: Date
      toDeleteAt: Date
    }, ExtArgs["result"]["file"]>
    composites: {}
  }

  type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = $Result.GetResult<Prisma.$FilePayload, S>

  type FileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface FileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['File'], meta: { name: 'File' } }
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileFindUniqueArgs>(args: SelectSubset<T, FileFindUniqueArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one File that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(args: SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileFindFirstArgs>(args?: SelectSubset<T, FileFindFirstArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(args?: SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileFindManyArgs>(args?: SelectSubset<T, FileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
     */
    create<T extends FileCreateArgs>(args: SelectSubset<T, FileCreateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {FileCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileCreateManyArgs>(args?: SelectSubset<T, FileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {FileCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileCreateManyAndReturnArgs>(args?: SelectSubset<T, FileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
     */
    delete<T extends FileDeleteArgs>(args: SelectSubset<T, FileDeleteArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileUpdateArgs>(args: SelectSubset<T, FileUpdateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileDeleteManyArgs>(args?: SelectSubset<T, FileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileUpdateManyArgs>(args: SelectSubset<T, FileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files and returns the data updated in the database.
     * @param {FileUpdateManyAndReturnArgs} args - Arguments to update many Files.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.updateManyAndReturn({
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
    updateManyAndReturn<T extends FileUpdateManyAndReturnArgs>(args: SelectSubset<T, FileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
     */
    upsert<T extends FileUpsertArgs>(args: SelectSubset<T, FileUpsertArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
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
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the File model
   */
  readonly fields: FileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    s240Images<T extends File$s240ImagesArgs<ExtArgs> = {}>(args?: Subset<T, File$s240ImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    s480Images<T extends File$s480ImagesArgs<ExtArgs> = {}>(args?: Subset<T, File$s480ImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    s720Images<T extends File$s720ImagesArgs<ExtArgs> = {}>(args?: Subset<T, File$s720ImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    s1080Images<T extends File$s1080ImagesArgs<ExtArgs> = {}>(args?: Subset<T, File$s1080ImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the File model
   */
  interface FileFieldRefs {
    readonly id: FieldRef<"File", 'Int'>
    readonly url: FieldRef<"File", 'String'>
    readonly mimeType: FieldRef<"File", 'String'>
    readonly size: FieldRef<"File", 'Int'>
    readonly createdAt: FieldRef<"File", 'DateTime'>
    readonly toDeleteAt: FieldRef<"File", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * File findUnique
   */
  export type FileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findFirst
   */
  export type FileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findMany
   */
  export type FileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File create
   */
  export type FileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }

  /**
   * File createMany
   */
  export type FileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * File createManyAndReturn
   */
  export type FileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * File update
   */
  export type FileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File updateMany
   */
  export type FileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
  }

  /**
   * File updateManyAndReturn
   */
  export type FileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
  }

  /**
   * File upsert
   */
  export type FileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }

  /**
   * File delete
   */
  export type FileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to delete.
     */
    limit?: number
  }

  /**
   * File.s240Images
   */
  export type File$s240ImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * File.s480Images
   */
  export type File$s480ImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * File.s720Images
   */
  export type File$s720ImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * File.s1080Images
   */
  export type File$s1080ImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * File without action
   */
  export type FileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
    s240FileId: number | null
    s480FileId: number | null
    s720FileId: number | null
    s1080FileId: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
    s240FileId: number | null
    s480FileId: number | null
    s720FileId: number | null
    s1080FileId: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    s240FileId: number | null
    s480FileId: number | null
    s720FileId: number | null
    s1080FileId: number | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    s240FileId: number | null
    s480FileId: number | null
    s720FileId: number | null
    s1080FileId: number | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    s240FileId: number
    s480FileId: number
    s720FileId: number
    s1080FileId: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
    s240FileId?: true
    s480FileId?: true
    s720FileId?: true
    s1080FileId?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
    s240FileId?: true
    s480FileId?: true
    s720FileId?: true
    s1080FileId?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    s240FileId?: true
    s480FileId?: true
    s720FileId?: true
    s1080FileId?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    s240FileId?: true
    s480FileId?: true
    s720FileId?: true
    s1080FileId?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    s240FileId?: true
    s480FileId?: true
    s720FileId?: true
    s1080FileId?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: number
    s240FileId: number
    s480FileId: number
    s720FileId: number
    s1080FileId: number
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    s240FileId?: boolean
    s480FileId?: boolean
    s720FileId?: boolean
    s1080FileId?: boolean
    s240File?: boolean | FileDefaultArgs<ExtArgs>
    s480File?: boolean | FileDefaultArgs<ExtArgs>
    s720File?: boolean | FileDefaultArgs<ExtArgs>
    s1080File?: boolean | FileDefaultArgs<ExtArgs>
    CarImages?: boolean | Image$CarImagesArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    s240FileId?: boolean
    s480FileId?: boolean
    s720FileId?: boolean
    s1080FileId?: boolean
    s240File?: boolean | FileDefaultArgs<ExtArgs>
    s480File?: boolean | FileDefaultArgs<ExtArgs>
    s720File?: boolean | FileDefaultArgs<ExtArgs>
    s1080File?: boolean | FileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    s240FileId?: boolean
    s480FileId?: boolean
    s720FileId?: boolean
    s1080FileId?: boolean
    s240File?: boolean | FileDefaultArgs<ExtArgs>
    s480File?: boolean | FileDefaultArgs<ExtArgs>
    s720File?: boolean | FileDefaultArgs<ExtArgs>
    s1080File?: boolean | FileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    s240FileId?: boolean
    s480FileId?: boolean
    s720FileId?: boolean
    s1080FileId?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "s240FileId" | "s480FileId" | "s720FileId" | "s1080FileId", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    s240File?: boolean | FileDefaultArgs<ExtArgs>
    s480File?: boolean | FileDefaultArgs<ExtArgs>
    s720File?: boolean | FileDefaultArgs<ExtArgs>
    s1080File?: boolean | FileDefaultArgs<ExtArgs>
    CarImages?: boolean | Image$CarImagesArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    s240File?: boolean | FileDefaultArgs<ExtArgs>
    s480File?: boolean | FileDefaultArgs<ExtArgs>
    s720File?: boolean | FileDefaultArgs<ExtArgs>
    s1080File?: boolean | FileDefaultArgs<ExtArgs>
  }
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    s240File?: boolean | FileDefaultArgs<ExtArgs>
    s480File?: boolean | FileDefaultArgs<ExtArgs>
    s720File?: boolean | FileDefaultArgs<ExtArgs>
    s1080File?: boolean | FileDefaultArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      s240File: Prisma.$FilePayload<ExtArgs>
      s480File: Prisma.$FilePayload<ExtArgs>
      s720File: Prisma.$FilePayload<ExtArgs>
      s1080File: Prisma.$FilePayload<ExtArgs>
      CarImages: Prisma.$CarImagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      s240FileId: number
      s480FileId: number
      s720FileId: number
      s1080FileId: number
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    s240File<T extends FileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FileDefaultArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    s480File<T extends FileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FileDefaultArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    s720File<T extends FileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FileDefaultArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    s1080File<T extends FileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FileDefaultArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    CarImages<T extends Image$CarImagesArgs<ExtArgs> = {}>(args?: Subset<T, Image$CarImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'Int'>
    readonly s240FileId: FieldRef<"Image", 'Int'>
    readonly s480FileId: FieldRef<"Image", 'Int'>
    readonly s720FileId: FieldRef<"Image", 'Int'>
    readonly s1080FileId: FieldRef<"Image", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image.CarImages
   */
  export type Image$CarImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarImages
     */
    select?: CarImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarImages
     */
    omit?: CarImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarImagesInclude<ExtArgs> | null
    where?: CarImagesWhereInput
    orderBy?: CarImagesOrderByWithRelationInput | CarImagesOrderByWithRelationInput[]
    cursor?: CarImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarImagesScalarFieldEnum | CarImagesScalarFieldEnum[]
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
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


  export const CarMakeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    countryOfOrigin: 'countryOfOrigin',
    logoUrl: 'logoUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CarMakeScalarFieldEnum = (typeof CarMakeScalarFieldEnum)[keyof typeof CarMakeScalarFieldEnum]


  export const CarModelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    makeId: 'makeId'
  };

  export type CarModelScalarFieldEnum = (typeof CarModelScalarFieldEnum)[keyof typeof CarModelScalarFieldEnum]


  export const CarsScalarFieldEnum: {
    id: 'id',
    makeId: 'makeId',
    modelId: 'modelId',
    price: 'price',
    year: 'year',
    mileage: 'mileage',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CarsScalarFieldEnum = (typeof CarsScalarFieldEnum)[keyof typeof CarsScalarFieldEnum]


  export const CarImagesScalarFieldEnum: {
    id: 'id',
    carId: 'carId',
    imageId: 'imageId'
  };

  export type CarImagesScalarFieldEnum = (typeof CarImagesScalarFieldEnum)[keyof typeof CarImagesScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    firstname: 'firstname',
    lastname: 'lastname',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EntityScalarFieldEnum: {
    id: 'id',
    registrationnumber: 'registrationnumber'
  };

  export type EntityScalarFieldEnum = (typeof EntityScalarFieldEnum)[keyof typeof EntityScalarFieldEnum]


  export const FileScalarFieldEnum: {
    id: 'id',
    url: 'url',
    mimeType: 'mimeType',
    size: 'size',
    createdAt: 'createdAt',
    toDeleteAt: 'toDeleteAt'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    s240FileId: 's240FileId',
    s480FileId: 's480FileId',
    s720FileId: 's720FileId',
    s1080FileId: 's1080FileId'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


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


  export type CarMakeWhereInput = {
    AND?: CarMakeWhereInput | CarMakeWhereInput[]
    OR?: CarMakeWhereInput[]
    NOT?: CarMakeWhereInput | CarMakeWhereInput[]
    id?: IntFilter<"CarMake"> | number
    name?: StringFilter<"CarMake"> | string
    countryOfOrigin?: StringNullableFilter<"CarMake"> | string | null
    logoUrl?: StringNullableFilter<"CarMake"> | string | null
    createdAt?: DateTimeFilter<"CarMake"> | Date | string
    updatedAt?: DateTimeFilter<"CarMake"> | Date | string
    models?: CarModelListRelationFilter
    cars?: CarsListRelationFilter
  }

  export type CarMakeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    countryOfOrigin?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    models?: CarModelOrderByRelationAggregateInput
    cars?: CarsOrderByRelationAggregateInput
  }

  export type CarMakeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CarMakeWhereInput | CarMakeWhereInput[]
    OR?: CarMakeWhereInput[]
    NOT?: CarMakeWhereInput | CarMakeWhereInput[]
    countryOfOrigin?: StringNullableFilter<"CarMake"> | string | null
    logoUrl?: StringNullableFilter<"CarMake"> | string | null
    createdAt?: DateTimeFilter<"CarMake"> | Date | string
    updatedAt?: DateTimeFilter<"CarMake"> | Date | string
    models?: CarModelListRelationFilter
    cars?: CarsListRelationFilter
  }, "id" | "name">

  export type CarMakeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    countryOfOrigin?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CarMakeCountOrderByAggregateInput
    _avg?: CarMakeAvgOrderByAggregateInput
    _max?: CarMakeMaxOrderByAggregateInput
    _min?: CarMakeMinOrderByAggregateInput
    _sum?: CarMakeSumOrderByAggregateInput
  }

  export type CarMakeScalarWhereWithAggregatesInput = {
    AND?: CarMakeScalarWhereWithAggregatesInput | CarMakeScalarWhereWithAggregatesInput[]
    OR?: CarMakeScalarWhereWithAggregatesInput[]
    NOT?: CarMakeScalarWhereWithAggregatesInput | CarMakeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CarMake"> | number
    name?: StringWithAggregatesFilter<"CarMake"> | string
    countryOfOrigin?: StringNullableWithAggregatesFilter<"CarMake"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"CarMake"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CarMake"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CarMake"> | Date | string
  }

  export type CarModelWhereInput = {
    AND?: CarModelWhereInput | CarModelWhereInput[]
    OR?: CarModelWhereInput[]
    NOT?: CarModelWhereInput | CarModelWhereInput[]
    id?: IntFilter<"CarModel"> | number
    name?: StringFilter<"CarModel"> | string
    makeId?: IntFilter<"CarModel"> | number
    make?: XOR<CarMakeScalarRelationFilter, CarMakeWhereInput>
    cars?: CarsListRelationFilter
  }

  export type CarModelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    makeId?: SortOrder
    make?: CarMakeOrderByWithRelationInput
    cars?: CarsOrderByRelationAggregateInput
  }

  export type CarModelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    makeId_name?: CarModelMakeIdNameCompoundUniqueInput
    AND?: CarModelWhereInput | CarModelWhereInput[]
    OR?: CarModelWhereInput[]
    NOT?: CarModelWhereInput | CarModelWhereInput[]
    name?: StringFilter<"CarModel"> | string
    makeId?: IntFilter<"CarModel"> | number
    make?: XOR<CarMakeScalarRelationFilter, CarMakeWhereInput>
    cars?: CarsListRelationFilter
  }, "id" | "makeId_name">

  export type CarModelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    makeId?: SortOrder
    _count?: CarModelCountOrderByAggregateInput
    _avg?: CarModelAvgOrderByAggregateInput
    _max?: CarModelMaxOrderByAggregateInput
    _min?: CarModelMinOrderByAggregateInput
    _sum?: CarModelSumOrderByAggregateInput
  }

  export type CarModelScalarWhereWithAggregatesInput = {
    AND?: CarModelScalarWhereWithAggregatesInput | CarModelScalarWhereWithAggregatesInput[]
    OR?: CarModelScalarWhereWithAggregatesInput[]
    NOT?: CarModelScalarWhereWithAggregatesInput | CarModelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CarModel"> | number
    name?: StringWithAggregatesFilter<"CarModel"> | string
    makeId?: IntWithAggregatesFilter<"CarModel"> | number
  }

  export type CarsWhereInput = {
    AND?: CarsWhereInput | CarsWhereInput[]
    OR?: CarsWhereInput[]
    NOT?: CarsWhereInput | CarsWhereInput[]
    id?: IntFilter<"Cars"> | number
    makeId?: IntFilter<"Cars"> | number
    modelId?: IntFilter<"Cars"> | number
    price?: IntFilter<"Cars"> | number
    year?: IntFilter<"Cars"> | number
    mileage?: IntFilter<"Cars"> | number
    userId?: IntFilter<"Cars"> | number
    createdAt?: DateTimeFilter<"Cars"> | Date | string
    updatedAt?: DateTimeFilter<"Cars"> | Date | string
    make?: XOR<CarMakeScalarRelationFilter, CarMakeWhereInput>
    model?: XOR<CarModelScalarRelationFilter, CarModelWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    carImages?: CarImagesListRelationFilter
  }

  export type CarsOrderByWithRelationInput = {
    id?: SortOrder
    makeId?: SortOrder
    modelId?: SortOrder
    price?: SortOrder
    year?: SortOrder
    mileage?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    make?: CarMakeOrderByWithRelationInput
    model?: CarModelOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    carImages?: CarImagesOrderByRelationAggregateInput
  }

  export type CarsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CarsWhereInput | CarsWhereInput[]
    OR?: CarsWhereInput[]
    NOT?: CarsWhereInput | CarsWhereInput[]
    makeId?: IntFilter<"Cars"> | number
    modelId?: IntFilter<"Cars"> | number
    price?: IntFilter<"Cars"> | number
    year?: IntFilter<"Cars"> | number
    mileage?: IntFilter<"Cars"> | number
    userId?: IntFilter<"Cars"> | number
    createdAt?: DateTimeFilter<"Cars"> | Date | string
    updatedAt?: DateTimeFilter<"Cars"> | Date | string
    make?: XOR<CarMakeScalarRelationFilter, CarMakeWhereInput>
    model?: XOR<CarModelScalarRelationFilter, CarModelWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    carImages?: CarImagesListRelationFilter
  }, "id">

  export type CarsOrderByWithAggregationInput = {
    id?: SortOrder
    makeId?: SortOrder
    modelId?: SortOrder
    price?: SortOrder
    year?: SortOrder
    mileage?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CarsCountOrderByAggregateInput
    _avg?: CarsAvgOrderByAggregateInput
    _max?: CarsMaxOrderByAggregateInput
    _min?: CarsMinOrderByAggregateInput
    _sum?: CarsSumOrderByAggregateInput
  }

  export type CarsScalarWhereWithAggregatesInput = {
    AND?: CarsScalarWhereWithAggregatesInput | CarsScalarWhereWithAggregatesInput[]
    OR?: CarsScalarWhereWithAggregatesInput[]
    NOT?: CarsScalarWhereWithAggregatesInput | CarsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cars"> | number
    makeId?: IntWithAggregatesFilter<"Cars"> | number
    modelId?: IntWithAggregatesFilter<"Cars"> | number
    price?: IntWithAggregatesFilter<"Cars"> | number
    year?: IntWithAggregatesFilter<"Cars"> | number
    mileage?: IntWithAggregatesFilter<"Cars"> | number
    userId?: IntWithAggregatesFilter<"Cars"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Cars"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cars"> | Date | string
  }

  export type CarImagesWhereInput = {
    AND?: CarImagesWhereInput | CarImagesWhereInput[]
    OR?: CarImagesWhereInput[]
    NOT?: CarImagesWhereInput | CarImagesWhereInput[]
    id?: IntFilter<"CarImages"> | number
    carId?: IntFilter<"CarImages"> | number
    imageId?: IntFilter<"CarImages"> | number
    car?: XOR<CarsScalarRelationFilter, CarsWhereInput>
    images?: XOR<ImageScalarRelationFilter, ImageWhereInput>
  }

  export type CarImagesOrderByWithRelationInput = {
    id?: SortOrder
    carId?: SortOrder
    imageId?: SortOrder
    car?: CarsOrderByWithRelationInput
    images?: ImageOrderByWithRelationInput
  }

  export type CarImagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CarImagesWhereInput | CarImagesWhereInput[]
    OR?: CarImagesWhereInput[]
    NOT?: CarImagesWhereInput | CarImagesWhereInput[]
    carId?: IntFilter<"CarImages"> | number
    imageId?: IntFilter<"CarImages"> | number
    car?: XOR<CarsScalarRelationFilter, CarsWhereInput>
    images?: XOR<ImageScalarRelationFilter, ImageWhereInput>
  }, "id">

  export type CarImagesOrderByWithAggregationInput = {
    id?: SortOrder
    carId?: SortOrder
    imageId?: SortOrder
    _count?: CarImagesCountOrderByAggregateInput
    _avg?: CarImagesAvgOrderByAggregateInput
    _max?: CarImagesMaxOrderByAggregateInput
    _min?: CarImagesMinOrderByAggregateInput
    _sum?: CarImagesSumOrderByAggregateInput
  }

  export type CarImagesScalarWhereWithAggregatesInput = {
    AND?: CarImagesScalarWhereWithAggregatesInput | CarImagesScalarWhereWithAggregatesInput[]
    OR?: CarImagesScalarWhereWithAggregatesInput[]
    NOT?: CarImagesScalarWhereWithAggregatesInput | CarImagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CarImages"> | number
    carId?: IntWithAggregatesFilter<"CarImages"> | number
    imageId?: IntWithAggregatesFilter<"CarImages"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    cars?: CarsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cars?: CarsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    cars?: CarsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    firstname?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EntityWhereInput = {
    AND?: EntityWhereInput | EntityWhereInput[]
    OR?: EntityWhereInput[]
    NOT?: EntityWhereInput | EntityWhereInput[]
    id?: IntFilter<"Entity"> | number
    registrationnumber?: StringFilter<"Entity"> | string
  }

  export type EntityOrderByWithRelationInput = {
    id?: SortOrder
    registrationnumber?: SortOrder
  }

  export type EntityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EntityWhereInput | EntityWhereInput[]
    OR?: EntityWhereInput[]
    NOT?: EntityWhereInput | EntityWhereInput[]
    registrationnumber?: StringFilter<"Entity"> | string
  }, "id">

  export type EntityOrderByWithAggregationInput = {
    id?: SortOrder
    registrationnumber?: SortOrder
    _count?: EntityCountOrderByAggregateInput
    _avg?: EntityAvgOrderByAggregateInput
    _max?: EntityMaxOrderByAggregateInput
    _min?: EntityMinOrderByAggregateInput
    _sum?: EntitySumOrderByAggregateInput
  }

  export type EntityScalarWhereWithAggregatesInput = {
    AND?: EntityScalarWhereWithAggregatesInput | EntityScalarWhereWithAggregatesInput[]
    OR?: EntityScalarWhereWithAggregatesInput[]
    NOT?: EntityScalarWhereWithAggregatesInput | EntityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Entity"> | number
    registrationnumber?: StringWithAggregatesFilter<"Entity"> | string
  }

  export type FileWhereInput = {
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    id?: IntFilter<"File"> | number
    url?: StringFilter<"File"> | string
    mimeType?: StringFilter<"File"> | string
    size?: IntFilter<"File"> | number
    createdAt?: DateTimeFilter<"File"> | Date | string
    toDeleteAt?: DateTimeFilter<"File"> | Date | string
    s240Images?: ImageListRelationFilter
    s480Images?: ImageListRelationFilter
    s720Images?: ImageListRelationFilter
    s1080Images?: ImageListRelationFilter
  }

  export type FileOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    toDeleteAt?: SortOrder
    s240Images?: ImageOrderByRelationAggregateInput
    s480Images?: ImageOrderByRelationAggregateInput
    s720Images?: ImageOrderByRelationAggregateInput
    s1080Images?: ImageOrderByRelationAggregateInput
  }

  export type FileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    url?: StringFilter<"File"> | string
    mimeType?: StringFilter<"File"> | string
    size?: IntFilter<"File"> | number
    createdAt?: DateTimeFilter<"File"> | Date | string
    toDeleteAt?: DateTimeFilter<"File"> | Date | string
    s240Images?: ImageListRelationFilter
    s480Images?: ImageListRelationFilter
    s720Images?: ImageListRelationFilter
    s1080Images?: ImageListRelationFilter
  }, "id">

  export type FileOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    toDeleteAt?: SortOrder
    _count?: FileCountOrderByAggregateInput
    _avg?: FileAvgOrderByAggregateInput
    _max?: FileMaxOrderByAggregateInput
    _min?: FileMinOrderByAggregateInput
    _sum?: FileSumOrderByAggregateInput
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    OR?: FileScalarWhereWithAggregatesInput[]
    NOT?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"File"> | number
    url?: StringWithAggregatesFilter<"File"> | string
    mimeType?: StringWithAggregatesFilter<"File"> | string
    size?: IntWithAggregatesFilter<"File"> | number
    createdAt?: DateTimeWithAggregatesFilter<"File"> | Date | string
    toDeleteAt?: DateTimeWithAggregatesFilter<"File"> | Date | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: IntFilter<"Image"> | number
    s240FileId?: IntFilter<"Image"> | number
    s480FileId?: IntFilter<"Image"> | number
    s720FileId?: IntFilter<"Image"> | number
    s1080FileId?: IntFilter<"Image"> | number
    s240File?: XOR<FileScalarRelationFilter, FileWhereInput>
    s480File?: XOR<FileScalarRelationFilter, FileWhereInput>
    s720File?: XOR<FileScalarRelationFilter, FileWhereInput>
    s1080File?: XOR<FileScalarRelationFilter, FileWhereInput>
    CarImages?: CarImagesListRelationFilter
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    s240FileId?: SortOrder
    s480FileId?: SortOrder
    s720FileId?: SortOrder
    s1080FileId?: SortOrder
    s240File?: FileOrderByWithRelationInput
    s480File?: FileOrderByWithRelationInput
    s720File?: FileOrderByWithRelationInput
    s1080File?: FileOrderByWithRelationInput
    CarImages?: CarImagesOrderByRelationAggregateInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    s240FileId?: IntFilter<"Image"> | number
    s480FileId?: IntFilter<"Image"> | number
    s720FileId?: IntFilter<"Image"> | number
    s1080FileId?: IntFilter<"Image"> | number
    s240File?: XOR<FileScalarRelationFilter, FileWhereInput>
    s480File?: XOR<FileScalarRelationFilter, FileWhereInput>
    s720File?: XOR<FileScalarRelationFilter, FileWhereInput>
    s1080File?: XOR<FileScalarRelationFilter, FileWhereInput>
    CarImages?: CarImagesListRelationFilter
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    s240FileId?: SortOrder
    s480FileId?: SortOrder
    s720FileId?: SortOrder
    s1080FileId?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Image"> | number
    s240FileId?: IntWithAggregatesFilter<"Image"> | number
    s480FileId?: IntWithAggregatesFilter<"Image"> | number
    s720FileId?: IntWithAggregatesFilter<"Image"> | number
    s1080FileId?: IntWithAggregatesFilter<"Image"> | number
  }

  export type CarMakeCreateInput = {
    name: string
    countryOfOrigin?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: CarModelCreateNestedManyWithoutMakeInput
    cars?: CarsCreateNestedManyWithoutMakeInput
  }

  export type CarMakeUncheckedCreateInput = {
    id?: number
    name: string
    countryOfOrigin?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: CarModelUncheckedCreateNestedManyWithoutMakeInput
    cars?: CarsUncheckedCreateNestedManyWithoutMakeInput
  }

  export type CarMakeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    countryOfOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: CarModelUpdateManyWithoutMakeNestedInput
    cars?: CarsUpdateManyWithoutMakeNestedInput
  }

  export type CarMakeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    countryOfOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: CarModelUncheckedUpdateManyWithoutMakeNestedInput
    cars?: CarsUncheckedUpdateManyWithoutMakeNestedInput
  }

  export type CarMakeCreateManyInput = {
    id?: number
    name: string
    countryOfOrigin?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarMakeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    countryOfOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarMakeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    countryOfOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarModelCreateInput = {
    name: string
    make: CarMakeCreateNestedOneWithoutModelsInput
    cars?: CarsCreateNestedManyWithoutModelInput
  }

  export type CarModelUncheckedCreateInput = {
    id?: number
    name: string
    makeId: number
    cars?: CarsUncheckedCreateNestedManyWithoutModelInput
  }

  export type CarModelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    make?: CarMakeUpdateOneRequiredWithoutModelsNestedInput
    cars?: CarsUpdateManyWithoutModelNestedInput
  }

  export type CarModelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    makeId?: IntFieldUpdateOperationsInput | number
    cars?: CarsUncheckedUpdateManyWithoutModelNestedInput
  }

  export type CarModelCreateManyInput = {
    id?: number
    name: string
    makeId: number
  }

  export type CarModelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CarModelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    makeId?: IntFieldUpdateOperationsInput | number
  }

  export type CarsCreateInput = {
    price: number
    year: number
    mileage: number
    createdAt?: Date | string
    updatedAt?: Date | string
    make: CarMakeCreateNestedOneWithoutCarsInput
    model: CarModelCreateNestedOneWithoutCarsInput
    user: UserCreateNestedOneWithoutCarsInput
    carImages?: CarImagesCreateNestedManyWithoutCarInput
  }

  export type CarsUncheckedCreateInput = {
    id?: number
    makeId: number
    modelId: number
    price: number
    year: number
    mileage: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    carImages?: CarImagesUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarsUpdateInput = {
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    make?: CarMakeUpdateOneRequiredWithoutCarsNestedInput
    model?: CarModelUpdateOneRequiredWithoutCarsNestedInput
    user?: UserUpdateOneRequiredWithoutCarsNestedInput
    carImages?: CarImagesUpdateManyWithoutCarNestedInput
  }

  export type CarsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    makeId?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carImages?: CarImagesUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarsCreateManyInput = {
    id?: number
    makeId: number
    modelId: number
    price: number
    year: number
    mileage: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarsUpdateManyMutationInput = {
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    makeId?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarImagesCreateInput = {
    car: CarsCreateNestedOneWithoutCarImagesInput
    images: ImageCreateNestedOneWithoutCarImagesInput
  }

  export type CarImagesUncheckedCreateInput = {
    id?: number
    carId: number
    imageId: number
  }

  export type CarImagesUpdateInput = {
    car?: CarsUpdateOneRequiredWithoutCarImagesNestedInput
    images?: ImageUpdateOneRequiredWithoutCarImagesNestedInput
  }

  export type CarImagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
  }

  export type CarImagesCreateManyInput = {
    id?: number
    carId: number
    imageId: number
  }

  export type CarImagesUpdateManyMutationInput = {

  }

  export type CarImagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    email: string
    firstname: string
    lastname: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    firstname: string
    lastname: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    firstname: string
    lastname: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityCreateInput = {
    registrationnumber: string
  }

  export type EntityUncheckedCreateInput = {
    id?: number
    registrationnumber: string
  }

  export type EntityUpdateInput = {
    registrationnumber?: StringFieldUpdateOperationsInput | string
  }

  export type EntityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    registrationnumber?: StringFieldUpdateOperationsInput | string
  }

  export type EntityCreateManyInput = {
    id?: number
    registrationnumber: string
  }

  export type EntityUpdateManyMutationInput = {
    registrationnumber?: StringFieldUpdateOperationsInput | string
  }

  export type EntityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    registrationnumber?: StringFieldUpdateOperationsInput | string
  }

  export type FileCreateInput = {
    url: string
    mimeType: string
    size: number
    createdAt?: Date | string
    toDeleteAt?: Date | string
    s240Images?: ImageCreateNestedManyWithoutS240FileInput
    s480Images?: ImageCreateNestedManyWithoutS480FileInput
    s720Images?: ImageCreateNestedManyWithoutS720FileInput
    s1080Images?: ImageCreateNestedManyWithoutS1080FileInput
  }

  export type FileUncheckedCreateInput = {
    id?: number
    url: string
    mimeType: string
    size: number
    createdAt?: Date | string
    toDeleteAt?: Date | string
    s240Images?: ImageUncheckedCreateNestedManyWithoutS240FileInput
    s480Images?: ImageUncheckedCreateNestedManyWithoutS480FileInput
    s720Images?: ImageUncheckedCreateNestedManyWithoutS720FileInput
    s1080Images?: ImageUncheckedCreateNestedManyWithoutS1080FileInput
  }

  export type FileUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toDeleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    s240Images?: ImageUpdateManyWithoutS240FileNestedInput
    s480Images?: ImageUpdateManyWithoutS480FileNestedInput
    s720Images?: ImageUpdateManyWithoutS720FileNestedInput
    s1080Images?: ImageUpdateManyWithoutS1080FileNestedInput
  }

  export type FileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toDeleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    s240Images?: ImageUncheckedUpdateManyWithoutS240FileNestedInput
    s480Images?: ImageUncheckedUpdateManyWithoutS480FileNestedInput
    s720Images?: ImageUncheckedUpdateManyWithoutS720FileNestedInput
    s1080Images?: ImageUncheckedUpdateManyWithoutS1080FileNestedInput
  }

  export type FileCreateManyInput = {
    id?: number
    url: string
    mimeType: string
    size: number
    createdAt?: Date | string
    toDeleteAt?: Date | string
  }

  export type FileUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toDeleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toDeleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    s240File: FileCreateNestedOneWithoutS240ImagesInput
    s480File: FileCreateNestedOneWithoutS480ImagesInput
    s720File: FileCreateNestedOneWithoutS720ImagesInput
    s1080File: FileCreateNestedOneWithoutS1080ImagesInput
    CarImages?: CarImagesCreateNestedManyWithoutImagesInput
  }

  export type ImageUncheckedCreateInput = {
    id?: number
    s240FileId: number
    s480FileId: number
    s720FileId: number
    s1080FileId: number
    CarImages?: CarImagesUncheckedCreateNestedManyWithoutImagesInput
  }

  export type ImageUpdateInput = {
    s240File?: FileUpdateOneRequiredWithoutS240ImagesNestedInput
    s480File?: FileUpdateOneRequiredWithoutS480ImagesNestedInput
    s720File?: FileUpdateOneRequiredWithoutS720ImagesNestedInput
    s1080File?: FileUpdateOneRequiredWithoutS1080ImagesNestedInput
    CarImages?: CarImagesUpdateManyWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    s240FileId?: IntFieldUpdateOperationsInput | number
    s480FileId?: IntFieldUpdateOperationsInput | number
    s720FileId?: IntFieldUpdateOperationsInput | number
    s1080FileId?: IntFieldUpdateOperationsInput | number
    CarImages?: CarImagesUncheckedUpdateManyWithoutImagesNestedInput
  }

  export type ImageCreateManyInput = {
    id?: number
    s240FileId: number
    s480FileId: number
    s720FileId: number
    s1080FileId: number
  }

  export type ImageUpdateManyMutationInput = {

  }

  export type ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    s240FileId?: IntFieldUpdateOperationsInput | number
    s480FileId?: IntFieldUpdateOperationsInput | number
    s720FileId?: IntFieldUpdateOperationsInput | number
    s1080FileId?: IntFieldUpdateOperationsInput | number
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type CarModelListRelationFilter = {
    every?: CarModelWhereInput
    some?: CarModelWhereInput
    none?: CarModelWhereInput
  }

  export type CarsListRelationFilter = {
    every?: CarsWhereInput
    some?: CarsWhereInput
    none?: CarsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CarModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarMakeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    countryOfOrigin?: SortOrder
    logoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarMakeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CarMakeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    countryOfOrigin?: SortOrder
    logoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarMakeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    countryOfOrigin?: SortOrder
    logoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarMakeSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type CarMakeScalarRelationFilter = {
    is?: CarMakeWhereInput
    isNot?: CarMakeWhereInput
  }

  export type CarModelMakeIdNameCompoundUniqueInput = {
    makeId: number
    name: string
  }

  export type CarModelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    makeId?: SortOrder
  }

  export type CarModelAvgOrderByAggregateInput = {
    id?: SortOrder
    makeId?: SortOrder
  }

  export type CarModelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    makeId?: SortOrder
  }

  export type CarModelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    makeId?: SortOrder
  }

  export type CarModelSumOrderByAggregateInput = {
    id?: SortOrder
    makeId?: SortOrder
  }

  export type CarModelScalarRelationFilter = {
    is?: CarModelWhereInput
    isNot?: CarModelWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CarImagesListRelationFilter = {
    every?: CarImagesWhereInput
    some?: CarImagesWhereInput
    none?: CarImagesWhereInput
  }

  export type CarImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarsCountOrderByAggregateInput = {
    id?: SortOrder
    makeId?: SortOrder
    modelId?: SortOrder
    price?: SortOrder
    year?: SortOrder
    mileage?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarsAvgOrderByAggregateInput = {
    id?: SortOrder
    makeId?: SortOrder
    modelId?: SortOrder
    price?: SortOrder
    year?: SortOrder
    mileage?: SortOrder
    userId?: SortOrder
  }

  export type CarsMaxOrderByAggregateInput = {
    id?: SortOrder
    makeId?: SortOrder
    modelId?: SortOrder
    price?: SortOrder
    year?: SortOrder
    mileage?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarsMinOrderByAggregateInput = {
    id?: SortOrder
    makeId?: SortOrder
    modelId?: SortOrder
    price?: SortOrder
    year?: SortOrder
    mileage?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarsSumOrderByAggregateInput = {
    id?: SortOrder
    makeId?: SortOrder
    modelId?: SortOrder
    price?: SortOrder
    year?: SortOrder
    mileage?: SortOrder
    userId?: SortOrder
  }

  export type CarsScalarRelationFilter = {
    is?: CarsWhereInput
    isNot?: CarsWhereInput
  }

  export type ImageScalarRelationFilter = {
    is?: ImageWhereInput
    isNot?: ImageWhereInput
  }

  export type CarImagesCountOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    imageId?: SortOrder
  }

  export type CarImagesAvgOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    imageId?: SortOrder
  }

  export type CarImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    imageId?: SortOrder
  }

  export type CarImagesMinOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    imageId?: SortOrder
  }

  export type CarImagesSumOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    imageId?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EntityCountOrderByAggregateInput = {
    id?: SortOrder
    registrationnumber?: SortOrder
  }

  export type EntityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EntityMaxOrderByAggregateInput = {
    id?: SortOrder
    registrationnumber?: SortOrder
  }

  export type EntityMinOrderByAggregateInput = {
    id?: SortOrder
    registrationnumber?: SortOrder
  }

  export type EntitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    toDeleteAt?: SortOrder
  }

  export type FileAvgOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
  }

  export type FileMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    toDeleteAt?: SortOrder
  }

  export type FileMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    toDeleteAt?: SortOrder
  }

  export type FileSumOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
  }

  export type FileScalarRelationFilter = {
    is?: FileWhereInput
    isNot?: FileWhereInput
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    s240FileId?: SortOrder
    s480FileId?: SortOrder
    s720FileId?: SortOrder
    s1080FileId?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder
    s240FileId?: SortOrder
    s480FileId?: SortOrder
    s720FileId?: SortOrder
    s1080FileId?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    s240FileId?: SortOrder
    s480FileId?: SortOrder
    s720FileId?: SortOrder
    s1080FileId?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    s240FileId?: SortOrder
    s480FileId?: SortOrder
    s720FileId?: SortOrder
    s1080FileId?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder
    s240FileId?: SortOrder
    s480FileId?: SortOrder
    s720FileId?: SortOrder
    s1080FileId?: SortOrder
  }

  export type CarModelCreateNestedManyWithoutMakeInput = {
    create?: XOR<CarModelCreateWithoutMakeInput, CarModelUncheckedCreateWithoutMakeInput> | CarModelCreateWithoutMakeInput[] | CarModelUncheckedCreateWithoutMakeInput[]
    connectOrCreate?: CarModelCreateOrConnectWithoutMakeInput | CarModelCreateOrConnectWithoutMakeInput[]
    createMany?: CarModelCreateManyMakeInputEnvelope
    connect?: CarModelWhereUniqueInput | CarModelWhereUniqueInput[]
  }

  export type CarsCreateNestedManyWithoutMakeInput = {
    create?: XOR<CarsCreateWithoutMakeInput, CarsUncheckedCreateWithoutMakeInput> | CarsCreateWithoutMakeInput[] | CarsUncheckedCreateWithoutMakeInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutMakeInput | CarsCreateOrConnectWithoutMakeInput[]
    createMany?: CarsCreateManyMakeInputEnvelope
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
  }

  export type CarModelUncheckedCreateNestedManyWithoutMakeInput = {
    create?: XOR<CarModelCreateWithoutMakeInput, CarModelUncheckedCreateWithoutMakeInput> | CarModelCreateWithoutMakeInput[] | CarModelUncheckedCreateWithoutMakeInput[]
    connectOrCreate?: CarModelCreateOrConnectWithoutMakeInput | CarModelCreateOrConnectWithoutMakeInput[]
    createMany?: CarModelCreateManyMakeInputEnvelope
    connect?: CarModelWhereUniqueInput | CarModelWhereUniqueInput[]
  }

  export type CarsUncheckedCreateNestedManyWithoutMakeInput = {
    create?: XOR<CarsCreateWithoutMakeInput, CarsUncheckedCreateWithoutMakeInput> | CarsCreateWithoutMakeInput[] | CarsUncheckedCreateWithoutMakeInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutMakeInput | CarsCreateOrConnectWithoutMakeInput[]
    createMany?: CarsCreateManyMakeInputEnvelope
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CarModelUpdateManyWithoutMakeNestedInput = {
    create?: XOR<CarModelCreateWithoutMakeInput, CarModelUncheckedCreateWithoutMakeInput> | CarModelCreateWithoutMakeInput[] | CarModelUncheckedCreateWithoutMakeInput[]
    connectOrCreate?: CarModelCreateOrConnectWithoutMakeInput | CarModelCreateOrConnectWithoutMakeInput[]
    upsert?: CarModelUpsertWithWhereUniqueWithoutMakeInput | CarModelUpsertWithWhereUniqueWithoutMakeInput[]
    createMany?: CarModelCreateManyMakeInputEnvelope
    set?: CarModelWhereUniqueInput | CarModelWhereUniqueInput[]
    disconnect?: CarModelWhereUniqueInput | CarModelWhereUniqueInput[]
    delete?: CarModelWhereUniqueInput | CarModelWhereUniqueInput[]
    connect?: CarModelWhereUniqueInput | CarModelWhereUniqueInput[]
    update?: CarModelUpdateWithWhereUniqueWithoutMakeInput | CarModelUpdateWithWhereUniqueWithoutMakeInput[]
    updateMany?: CarModelUpdateManyWithWhereWithoutMakeInput | CarModelUpdateManyWithWhereWithoutMakeInput[]
    deleteMany?: CarModelScalarWhereInput | CarModelScalarWhereInput[]
  }

  export type CarsUpdateManyWithoutMakeNestedInput = {
    create?: XOR<CarsCreateWithoutMakeInput, CarsUncheckedCreateWithoutMakeInput> | CarsCreateWithoutMakeInput[] | CarsUncheckedCreateWithoutMakeInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutMakeInput | CarsCreateOrConnectWithoutMakeInput[]
    upsert?: CarsUpsertWithWhereUniqueWithoutMakeInput | CarsUpsertWithWhereUniqueWithoutMakeInput[]
    createMany?: CarsCreateManyMakeInputEnvelope
    set?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    disconnect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    delete?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    update?: CarsUpdateWithWhereUniqueWithoutMakeInput | CarsUpdateWithWhereUniqueWithoutMakeInput[]
    updateMany?: CarsUpdateManyWithWhereWithoutMakeInput | CarsUpdateManyWithWhereWithoutMakeInput[]
    deleteMany?: CarsScalarWhereInput | CarsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CarModelUncheckedUpdateManyWithoutMakeNestedInput = {
    create?: XOR<CarModelCreateWithoutMakeInput, CarModelUncheckedCreateWithoutMakeInput> | CarModelCreateWithoutMakeInput[] | CarModelUncheckedCreateWithoutMakeInput[]
    connectOrCreate?: CarModelCreateOrConnectWithoutMakeInput | CarModelCreateOrConnectWithoutMakeInput[]
    upsert?: CarModelUpsertWithWhereUniqueWithoutMakeInput | CarModelUpsertWithWhereUniqueWithoutMakeInput[]
    createMany?: CarModelCreateManyMakeInputEnvelope
    set?: CarModelWhereUniqueInput | CarModelWhereUniqueInput[]
    disconnect?: CarModelWhereUniqueInput | CarModelWhereUniqueInput[]
    delete?: CarModelWhereUniqueInput | CarModelWhereUniqueInput[]
    connect?: CarModelWhereUniqueInput | CarModelWhereUniqueInput[]
    update?: CarModelUpdateWithWhereUniqueWithoutMakeInput | CarModelUpdateWithWhereUniqueWithoutMakeInput[]
    updateMany?: CarModelUpdateManyWithWhereWithoutMakeInput | CarModelUpdateManyWithWhereWithoutMakeInput[]
    deleteMany?: CarModelScalarWhereInput | CarModelScalarWhereInput[]
  }

  export type CarsUncheckedUpdateManyWithoutMakeNestedInput = {
    create?: XOR<CarsCreateWithoutMakeInput, CarsUncheckedCreateWithoutMakeInput> | CarsCreateWithoutMakeInput[] | CarsUncheckedCreateWithoutMakeInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutMakeInput | CarsCreateOrConnectWithoutMakeInput[]
    upsert?: CarsUpsertWithWhereUniqueWithoutMakeInput | CarsUpsertWithWhereUniqueWithoutMakeInput[]
    createMany?: CarsCreateManyMakeInputEnvelope
    set?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    disconnect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    delete?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    update?: CarsUpdateWithWhereUniqueWithoutMakeInput | CarsUpdateWithWhereUniqueWithoutMakeInput[]
    updateMany?: CarsUpdateManyWithWhereWithoutMakeInput | CarsUpdateManyWithWhereWithoutMakeInput[]
    deleteMany?: CarsScalarWhereInput | CarsScalarWhereInput[]
  }

  export type CarMakeCreateNestedOneWithoutModelsInput = {
    create?: XOR<CarMakeCreateWithoutModelsInput, CarMakeUncheckedCreateWithoutModelsInput>
    connectOrCreate?: CarMakeCreateOrConnectWithoutModelsInput
    connect?: CarMakeWhereUniqueInput
  }

  export type CarsCreateNestedManyWithoutModelInput = {
    create?: XOR<CarsCreateWithoutModelInput, CarsUncheckedCreateWithoutModelInput> | CarsCreateWithoutModelInput[] | CarsUncheckedCreateWithoutModelInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutModelInput | CarsCreateOrConnectWithoutModelInput[]
    createMany?: CarsCreateManyModelInputEnvelope
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
  }

  export type CarsUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<CarsCreateWithoutModelInput, CarsUncheckedCreateWithoutModelInput> | CarsCreateWithoutModelInput[] | CarsUncheckedCreateWithoutModelInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutModelInput | CarsCreateOrConnectWithoutModelInput[]
    createMany?: CarsCreateManyModelInputEnvelope
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
  }

  export type CarMakeUpdateOneRequiredWithoutModelsNestedInput = {
    create?: XOR<CarMakeCreateWithoutModelsInput, CarMakeUncheckedCreateWithoutModelsInput>
    connectOrCreate?: CarMakeCreateOrConnectWithoutModelsInput
    upsert?: CarMakeUpsertWithoutModelsInput
    connect?: CarMakeWhereUniqueInput
    update?: XOR<XOR<CarMakeUpdateToOneWithWhereWithoutModelsInput, CarMakeUpdateWithoutModelsInput>, CarMakeUncheckedUpdateWithoutModelsInput>
  }

  export type CarsUpdateManyWithoutModelNestedInput = {
    create?: XOR<CarsCreateWithoutModelInput, CarsUncheckedCreateWithoutModelInput> | CarsCreateWithoutModelInput[] | CarsUncheckedCreateWithoutModelInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutModelInput | CarsCreateOrConnectWithoutModelInput[]
    upsert?: CarsUpsertWithWhereUniqueWithoutModelInput | CarsUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: CarsCreateManyModelInputEnvelope
    set?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    disconnect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    delete?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    update?: CarsUpdateWithWhereUniqueWithoutModelInput | CarsUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: CarsUpdateManyWithWhereWithoutModelInput | CarsUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: CarsScalarWhereInput | CarsScalarWhereInput[]
  }

  export type CarsUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<CarsCreateWithoutModelInput, CarsUncheckedCreateWithoutModelInput> | CarsCreateWithoutModelInput[] | CarsUncheckedCreateWithoutModelInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutModelInput | CarsCreateOrConnectWithoutModelInput[]
    upsert?: CarsUpsertWithWhereUniqueWithoutModelInput | CarsUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: CarsCreateManyModelInputEnvelope
    set?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    disconnect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    delete?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    update?: CarsUpdateWithWhereUniqueWithoutModelInput | CarsUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: CarsUpdateManyWithWhereWithoutModelInput | CarsUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: CarsScalarWhereInput | CarsScalarWhereInput[]
  }

  export type CarMakeCreateNestedOneWithoutCarsInput = {
    create?: XOR<CarMakeCreateWithoutCarsInput, CarMakeUncheckedCreateWithoutCarsInput>
    connectOrCreate?: CarMakeCreateOrConnectWithoutCarsInput
    connect?: CarMakeWhereUniqueInput
  }

  export type CarModelCreateNestedOneWithoutCarsInput = {
    create?: XOR<CarModelCreateWithoutCarsInput, CarModelUncheckedCreateWithoutCarsInput>
    connectOrCreate?: CarModelCreateOrConnectWithoutCarsInput
    connect?: CarModelWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCarsInput = {
    create?: XOR<UserCreateWithoutCarsInput, UserUncheckedCreateWithoutCarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCarsInput
    connect?: UserWhereUniqueInput
  }

  export type CarImagesCreateNestedManyWithoutCarInput = {
    create?: XOR<CarImagesCreateWithoutCarInput, CarImagesUncheckedCreateWithoutCarInput> | CarImagesCreateWithoutCarInput[] | CarImagesUncheckedCreateWithoutCarInput[]
    connectOrCreate?: CarImagesCreateOrConnectWithoutCarInput | CarImagesCreateOrConnectWithoutCarInput[]
    createMany?: CarImagesCreateManyCarInputEnvelope
    connect?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
  }

  export type CarImagesUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<CarImagesCreateWithoutCarInput, CarImagesUncheckedCreateWithoutCarInput> | CarImagesCreateWithoutCarInput[] | CarImagesUncheckedCreateWithoutCarInput[]
    connectOrCreate?: CarImagesCreateOrConnectWithoutCarInput | CarImagesCreateOrConnectWithoutCarInput[]
    createMany?: CarImagesCreateManyCarInputEnvelope
    connect?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
  }

  export type CarMakeUpdateOneRequiredWithoutCarsNestedInput = {
    create?: XOR<CarMakeCreateWithoutCarsInput, CarMakeUncheckedCreateWithoutCarsInput>
    connectOrCreate?: CarMakeCreateOrConnectWithoutCarsInput
    upsert?: CarMakeUpsertWithoutCarsInput
    connect?: CarMakeWhereUniqueInput
    update?: XOR<XOR<CarMakeUpdateToOneWithWhereWithoutCarsInput, CarMakeUpdateWithoutCarsInput>, CarMakeUncheckedUpdateWithoutCarsInput>
  }

  export type CarModelUpdateOneRequiredWithoutCarsNestedInput = {
    create?: XOR<CarModelCreateWithoutCarsInput, CarModelUncheckedCreateWithoutCarsInput>
    connectOrCreate?: CarModelCreateOrConnectWithoutCarsInput
    upsert?: CarModelUpsertWithoutCarsInput
    connect?: CarModelWhereUniqueInput
    update?: XOR<XOR<CarModelUpdateToOneWithWhereWithoutCarsInput, CarModelUpdateWithoutCarsInput>, CarModelUncheckedUpdateWithoutCarsInput>
  }

  export type UserUpdateOneRequiredWithoutCarsNestedInput = {
    create?: XOR<UserCreateWithoutCarsInput, UserUncheckedCreateWithoutCarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCarsInput
    upsert?: UserUpsertWithoutCarsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCarsInput, UserUpdateWithoutCarsInput>, UserUncheckedUpdateWithoutCarsInput>
  }

  export type CarImagesUpdateManyWithoutCarNestedInput = {
    create?: XOR<CarImagesCreateWithoutCarInput, CarImagesUncheckedCreateWithoutCarInput> | CarImagesCreateWithoutCarInput[] | CarImagesUncheckedCreateWithoutCarInput[]
    connectOrCreate?: CarImagesCreateOrConnectWithoutCarInput | CarImagesCreateOrConnectWithoutCarInput[]
    upsert?: CarImagesUpsertWithWhereUniqueWithoutCarInput | CarImagesUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: CarImagesCreateManyCarInputEnvelope
    set?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
    disconnect?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
    delete?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
    connect?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
    update?: CarImagesUpdateWithWhereUniqueWithoutCarInput | CarImagesUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: CarImagesUpdateManyWithWhereWithoutCarInput | CarImagesUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: CarImagesScalarWhereInput | CarImagesScalarWhereInput[]
  }

  export type CarImagesUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<CarImagesCreateWithoutCarInput, CarImagesUncheckedCreateWithoutCarInput> | CarImagesCreateWithoutCarInput[] | CarImagesUncheckedCreateWithoutCarInput[]
    connectOrCreate?: CarImagesCreateOrConnectWithoutCarInput | CarImagesCreateOrConnectWithoutCarInput[]
    upsert?: CarImagesUpsertWithWhereUniqueWithoutCarInput | CarImagesUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: CarImagesCreateManyCarInputEnvelope
    set?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
    disconnect?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
    delete?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
    connect?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
    update?: CarImagesUpdateWithWhereUniqueWithoutCarInput | CarImagesUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: CarImagesUpdateManyWithWhereWithoutCarInput | CarImagesUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: CarImagesScalarWhereInput | CarImagesScalarWhereInput[]
  }

  export type CarsCreateNestedOneWithoutCarImagesInput = {
    create?: XOR<CarsCreateWithoutCarImagesInput, CarsUncheckedCreateWithoutCarImagesInput>
    connectOrCreate?: CarsCreateOrConnectWithoutCarImagesInput
    connect?: CarsWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutCarImagesInput = {
    create?: XOR<ImageCreateWithoutCarImagesInput, ImageUncheckedCreateWithoutCarImagesInput>
    connectOrCreate?: ImageCreateOrConnectWithoutCarImagesInput
    connect?: ImageWhereUniqueInput
  }

  export type CarsUpdateOneRequiredWithoutCarImagesNestedInput = {
    create?: XOR<CarsCreateWithoutCarImagesInput, CarsUncheckedCreateWithoutCarImagesInput>
    connectOrCreate?: CarsCreateOrConnectWithoutCarImagesInput
    upsert?: CarsUpsertWithoutCarImagesInput
    connect?: CarsWhereUniqueInput
    update?: XOR<XOR<CarsUpdateToOneWithWhereWithoutCarImagesInput, CarsUpdateWithoutCarImagesInput>, CarsUncheckedUpdateWithoutCarImagesInput>
  }

  export type ImageUpdateOneRequiredWithoutCarImagesNestedInput = {
    create?: XOR<ImageCreateWithoutCarImagesInput, ImageUncheckedCreateWithoutCarImagesInput>
    connectOrCreate?: ImageCreateOrConnectWithoutCarImagesInput
    upsert?: ImageUpsertWithoutCarImagesInput
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutCarImagesInput, ImageUpdateWithoutCarImagesInput>, ImageUncheckedUpdateWithoutCarImagesInput>
  }

  export type CarsCreateNestedManyWithoutUserInput = {
    create?: XOR<CarsCreateWithoutUserInput, CarsUncheckedCreateWithoutUserInput> | CarsCreateWithoutUserInput[] | CarsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutUserInput | CarsCreateOrConnectWithoutUserInput[]
    createMany?: CarsCreateManyUserInputEnvelope
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
  }

  export type CarsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CarsCreateWithoutUserInput, CarsUncheckedCreateWithoutUserInput> | CarsCreateWithoutUserInput[] | CarsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutUserInput | CarsCreateOrConnectWithoutUserInput[]
    createMany?: CarsCreateManyUserInputEnvelope
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type CarsUpdateManyWithoutUserNestedInput = {
    create?: XOR<CarsCreateWithoutUserInput, CarsUncheckedCreateWithoutUserInput> | CarsCreateWithoutUserInput[] | CarsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutUserInput | CarsCreateOrConnectWithoutUserInput[]
    upsert?: CarsUpsertWithWhereUniqueWithoutUserInput | CarsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CarsCreateManyUserInputEnvelope
    set?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    disconnect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    delete?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    update?: CarsUpdateWithWhereUniqueWithoutUserInput | CarsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CarsUpdateManyWithWhereWithoutUserInput | CarsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CarsScalarWhereInput | CarsScalarWhereInput[]
  }

  export type CarsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CarsCreateWithoutUserInput, CarsUncheckedCreateWithoutUserInput> | CarsCreateWithoutUserInput[] | CarsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutUserInput | CarsCreateOrConnectWithoutUserInput[]
    upsert?: CarsUpsertWithWhereUniqueWithoutUserInput | CarsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CarsCreateManyUserInputEnvelope
    set?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    disconnect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    delete?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    update?: CarsUpdateWithWhereUniqueWithoutUserInput | CarsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CarsUpdateManyWithWhereWithoutUserInput | CarsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CarsScalarWhereInput | CarsScalarWhereInput[]
  }

  export type ImageCreateNestedManyWithoutS240FileInput = {
    create?: XOR<ImageCreateWithoutS240FileInput, ImageUncheckedCreateWithoutS240FileInput> | ImageCreateWithoutS240FileInput[] | ImageUncheckedCreateWithoutS240FileInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutS240FileInput | ImageCreateOrConnectWithoutS240FileInput[]
    createMany?: ImageCreateManyS240FileInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageCreateNestedManyWithoutS480FileInput = {
    create?: XOR<ImageCreateWithoutS480FileInput, ImageUncheckedCreateWithoutS480FileInput> | ImageCreateWithoutS480FileInput[] | ImageUncheckedCreateWithoutS480FileInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutS480FileInput | ImageCreateOrConnectWithoutS480FileInput[]
    createMany?: ImageCreateManyS480FileInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageCreateNestedManyWithoutS720FileInput = {
    create?: XOR<ImageCreateWithoutS720FileInput, ImageUncheckedCreateWithoutS720FileInput> | ImageCreateWithoutS720FileInput[] | ImageUncheckedCreateWithoutS720FileInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutS720FileInput | ImageCreateOrConnectWithoutS720FileInput[]
    createMany?: ImageCreateManyS720FileInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageCreateNestedManyWithoutS1080FileInput = {
    create?: XOR<ImageCreateWithoutS1080FileInput, ImageUncheckedCreateWithoutS1080FileInput> | ImageCreateWithoutS1080FileInput[] | ImageUncheckedCreateWithoutS1080FileInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutS1080FileInput | ImageCreateOrConnectWithoutS1080FileInput[]
    createMany?: ImageCreateManyS1080FileInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutS240FileInput = {
    create?: XOR<ImageCreateWithoutS240FileInput, ImageUncheckedCreateWithoutS240FileInput> | ImageCreateWithoutS240FileInput[] | ImageUncheckedCreateWithoutS240FileInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutS240FileInput | ImageCreateOrConnectWithoutS240FileInput[]
    createMany?: ImageCreateManyS240FileInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutS480FileInput = {
    create?: XOR<ImageCreateWithoutS480FileInput, ImageUncheckedCreateWithoutS480FileInput> | ImageCreateWithoutS480FileInput[] | ImageUncheckedCreateWithoutS480FileInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutS480FileInput | ImageCreateOrConnectWithoutS480FileInput[]
    createMany?: ImageCreateManyS480FileInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutS720FileInput = {
    create?: XOR<ImageCreateWithoutS720FileInput, ImageUncheckedCreateWithoutS720FileInput> | ImageCreateWithoutS720FileInput[] | ImageUncheckedCreateWithoutS720FileInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutS720FileInput | ImageCreateOrConnectWithoutS720FileInput[]
    createMany?: ImageCreateManyS720FileInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutS1080FileInput = {
    create?: XOR<ImageCreateWithoutS1080FileInput, ImageUncheckedCreateWithoutS1080FileInput> | ImageCreateWithoutS1080FileInput[] | ImageUncheckedCreateWithoutS1080FileInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutS1080FileInput | ImageCreateOrConnectWithoutS1080FileInput[]
    createMany?: ImageCreateManyS1080FileInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageUpdateManyWithoutS240FileNestedInput = {
    create?: XOR<ImageCreateWithoutS240FileInput, ImageUncheckedCreateWithoutS240FileInput> | ImageCreateWithoutS240FileInput[] | ImageUncheckedCreateWithoutS240FileInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutS240FileInput | ImageCreateOrConnectWithoutS240FileInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutS240FileInput | ImageUpsertWithWhereUniqueWithoutS240FileInput[]
    createMany?: ImageCreateManyS240FileInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutS240FileInput | ImageUpdateWithWhereUniqueWithoutS240FileInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutS240FileInput | ImageUpdateManyWithWhereWithoutS240FileInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ImageUpdateManyWithoutS480FileNestedInput = {
    create?: XOR<ImageCreateWithoutS480FileInput, ImageUncheckedCreateWithoutS480FileInput> | ImageCreateWithoutS480FileInput[] | ImageUncheckedCreateWithoutS480FileInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutS480FileInput | ImageCreateOrConnectWithoutS480FileInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutS480FileInput | ImageUpsertWithWhereUniqueWithoutS480FileInput[]
    createMany?: ImageCreateManyS480FileInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutS480FileInput | ImageUpdateWithWhereUniqueWithoutS480FileInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutS480FileInput | ImageUpdateManyWithWhereWithoutS480FileInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ImageUpdateManyWithoutS720FileNestedInput = {
    create?: XOR<ImageCreateWithoutS720FileInput, ImageUncheckedCreateWithoutS720FileInput> | ImageCreateWithoutS720FileInput[] | ImageUncheckedCreateWithoutS720FileInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutS720FileInput | ImageCreateOrConnectWithoutS720FileInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutS720FileInput | ImageUpsertWithWhereUniqueWithoutS720FileInput[]
    createMany?: ImageCreateManyS720FileInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutS720FileInput | ImageUpdateWithWhereUniqueWithoutS720FileInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutS720FileInput | ImageUpdateManyWithWhereWithoutS720FileInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ImageUpdateManyWithoutS1080FileNestedInput = {
    create?: XOR<ImageCreateWithoutS1080FileInput, ImageUncheckedCreateWithoutS1080FileInput> | ImageCreateWithoutS1080FileInput[] | ImageUncheckedCreateWithoutS1080FileInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutS1080FileInput | ImageCreateOrConnectWithoutS1080FileInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutS1080FileInput | ImageUpsertWithWhereUniqueWithoutS1080FileInput[]
    createMany?: ImageCreateManyS1080FileInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutS1080FileInput | ImageUpdateWithWhereUniqueWithoutS1080FileInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutS1080FileInput | ImageUpdateManyWithWhereWithoutS1080FileInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutS240FileNestedInput = {
    create?: XOR<ImageCreateWithoutS240FileInput, ImageUncheckedCreateWithoutS240FileInput> | ImageCreateWithoutS240FileInput[] | ImageUncheckedCreateWithoutS240FileInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutS240FileInput | ImageCreateOrConnectWithoutS240FileInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutS240FileInput | ImageUpsertWithWhereUniqueWithoutS240FileInput[]
    createMany?: ImageCreateManyS240FileInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutS240FileInput | ImageUpdateWithWhereUniqueWithoutS240FileInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutS240FileInput | ImageUpdateManyWithWhereWithoutS240FileInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutS480FileNestedInput = {
    create?: XOR<ImageCreateWithoutS480FileInput, ImageUncheckedCreateWithoutS480FileInput> | ImageCreateWithoutS480FileInput[] | ImageUncheckedCreateWithoutS480FileInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutS480FileInput | ImageCreateOrConnectWithoutS480FileInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutS480FileInput | ImageUpsertWithWhereUniqueWithoutS480FileInput[]
    createMany?: ImageCreateManyS480FileInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutS480FileInput | ImageUpdateWithWhereUniqueWithoutS480FileInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutS480FileInput | ImageUpdateManyWithWhereWithoutS480FileInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutS720FileNestedInput = {
    create?: XOR<ImageCreateWithoutS720FileInput, ImageUncheckedCreateWithoutS720FileInput> | ImageCreateWithoutS720FileInput[] | ImageUncheckedCreateWithoutS720FileInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutS720FileInput | ImageCreateOrConnectWithoutS720FileInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutS720FileInput | ImageUpsertWithWhereUniqueWithoutS720FileInput[]
    createMany?: ImageCreateManyS720FileInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutS720FileInput | ImageUpdateWithWhereUniqueWithoutS720FileInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutS720FileInput | ImageUpdateManyWithWhereWithoutS720FileInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutS1080FileNestedInput = {
    create?: XOR<ImageCreateWithoutS1080FileInput, ImageUncheckedCreateWithoutS1080FileInput> | ImageCreateWithoutS1080FileInput[] | ImageUncheckedCreateWithoutS1080FileInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutS1080FileInput | ImageCreateOrConnectWithoutS1080FileInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutS1080FileInput | ImageUpsertWithWhereUniqueWithoutS1080FileInput[]
    createMany?: ImageCreateManyS1080FileInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutS1080FileInput | ImageUpdateWithWhereUniqueWithoutS1080FileInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutS1080FileInput | ImageUpdateManyWithWhereWithoutS1080FileInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type FileCreateNestedOneWithoutS240ImagesInput = {
    create?: XOR<FileCreateWithoutS240ImagesInput, FileUncheckedCreateWithoutS240ImagesInput>
    connectOrCreate?: FileCreateOrConnectWithoutS240ImagesInput
    connect?: FileWhereUniqueInput
  }

  export type FileCreateNestedOneWithoutS480ImagesInput = {
    create?: XOR<FileCreateWithoutS480ImagesInput, FileUncheckedCreateWithoutS480ImagesInput>
    connectOrCreate?: FileCreateOrConnectWithoutS480ImagesInput
    connect?: FileWhereUniqueInput
  }

  export type FileCreateNestedOneWithoutS720ImagesInput = {
    create?: XOR<FileCreateWithoutS720ImagesInput, FileUncheckedCreateWithoutS720ImagesInput>
    connectOrCreate?: FileCreateOrConnectWithoutS720ImagesInput
    connect?: FileWhereUniqueInput
  }

  export type FileCreateNestedOneWithoutS1080ImagesInput = {
    create?: XOR<FileCreateWithoutS1080ImagesInput, FileUncheckedCreateWithoutS1080ImagesInput>
    connectOrCreate?: FileCreateOrConnectWithoutS1080ImagesInput
    connect?: FileWhereUniqueInput
  }

  export type CarImagesCreateNestedManyWithoutImagesInput = {
    create?: XOR<CarImagesCreateWithoutImagesInput, CarImagesUncheckedCreateWithoutImagesInput> | CarImagesCreateWithoutImagesInput[] | CarImagesUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: CarImagesCreateOrConnectWithoutImagesInput | CarImagesCreateOrConnectWithoutImagesInput[]
    createMany?: CarImagesCreateManyImagesInputEnvelope
    connect?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
  }

  export type CarImagesUncheckedCreateNestedManyWithoutImagesInput = {
    create?: XOR<CarImagesCreateWithoutImagesInput, CarImagesUncheckedCreateWithoutImagesInput> | CarImagesCreateWithoutImagesInput[] | CarImagesUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: CarImagesCreateOrConnectWithoutImagesInput | CarImagesCreateOrConnectWithoutImagesInput[]
    createMany?: CarImagesCreateManyImagesInputEnvelope
    connect?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
  }

  export type FileUpdateOneRequiredWithoutS240ImagesNestedInput = {
    create?: XOR<FileCreateWithoutS240ImagesInput, FileUncheckedCreateWithoutS240ImagesInput>
    connectOrCreate?: FileCreateOrConnectWithoutS240ImagesInput
    upsert?: FileUpsertWithoutS240ImagesInput
    connect?: FileWhereUniqueInput
    update?: XOR<XOR<FileUpdateToOneWithWhereWithoutS240ImagesInput, FileUpdateWithoutS240ImagesInput>, FileUncheckedUpdateWithoutS240ImagesInput>
  }

  export type FileUpdateOneRequiredWithoutS480ImagesNestedInput = {
    create?: XOR<FileCreateWithoutS480ImagesInput, FileUncheckedCreateWithoutS480ImagesInput>
    connectOrCreate?: FileCreateOrConnectWithoutS480ImagesInput
    upsert?: FileUpsertWithoutS480ImagesInput
    connect?: FileWhereUniqueInput
    update?: XOR<XOR<FileUpdateToOneWithWhereWithoutS480ImagesInput, FileUpdateWithoutS480ImagesInput>, FileUncheckedUpdateWithoutS480ImagesInput>
  }

  export type FileUpdateOneRequiredWithoutS720ImagesNestedInput = {
    create?: XOR<FileCreateWithoutS720ImagesInput, FileUncheckedCreateWithoutS720ImagesInput>
    connectOrCreate?: FileCreateOrConnectWithoutS720ImagesInput
    upsert?: FileUpsertWithoutS720ImagesInput
    connect?: FileWhereUniqueInput
    update?: XOR<XOR<FileUpdateToOneWithWhereWithoutS720ImagesInput, FileUpdateWithoutS720ImagesInput>, FileUncheckedUpdateWithoutS720ImagesInput>
  }

  export type FileUpdateOneRequiredWithoutS1080ImagesNestedInput = {
    create?: XOR<FileCreateWithoutS1080ImagesInput, FileUncheckedCreateWithoutS1080ImagesInput>
    connectOrCreate?: FileCreateOrConnectWithoutS1080ImagesInput
    upsert?: FileUpsertWithoutS1080ImagesInput
    connect?: FileWhereUniqueInput
    update?: XOR<XOR<FileUpdateToOneWithWhereWithoutS1080ImagesInput, FileUpdateWithoutS1080ImagesInput>, FileUncheckedUpdateWithoutS1080ImagesInput>
  }

  export type CarImagesUpdateManyWithoutImagesNestedInput = {
    create?: XOR<CarImagesCreateWithoutImagesInput, CarImagesUncheckedCreateWithoutImagesInput> | CarImagesCreateWithoutImagesInput[] | CarImagesUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: CarImagesCreateOrConnectWithoutImagesInput | CarImagesCreateOrConnectWithoutImagesInput[]
    upsert?: CarImagesUpsertWithWhereUniqueWithoutImagesInput | CarImagesUpsertWithWhereUniqueWithoutImagesInput[]
    createMany?: CarImagesCreateManyImagesInputEnvelope
    set?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
    disconnect?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
    delete?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
    connect?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
    update?: CarImagesUpdateWithWhereUniqueWithoutImagesInput | CarImagesUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: CarImagesUpdateManyWithWhereWithoutImagesInput | CarImagesUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: CarImagesScalarWhereInput | CarImagesScalarWhereInput[]
  }

  export type CarImagesUncheckedUpdateManyWithoutImagesNestedInput = {
    create?: XOR<CarImagesCreateWithoutImagesInput, CarImagesUncheckedCreateWithoutImagesInput> | CarImagesCreateWithoutImagesInput[] | CarImagesUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: CarImagesCreateOrConnectWithoutImagesInput | CarImagesCreateOrConnectWithoutImagesInput[]
    upsert?: CarImagesUpsertWithWhereUniqueWithoutImagesInput | CarImagesUpsertWithWhereUniqueWithoutImagesInput[]
    createMany?: CarImagesCreateManyImagesInputEnvelope
    set?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
    disconnect?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
    delete?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
    connect?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
    update?: CarImagesUpdateWithWhereUniqueWithoutImagesInput | CarImagesUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: CarImagesUpdateManyWithWhereWithoutImagesInput | CarImagesUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: CarImagesScalarWhereInput | CarImagesScalarWhereInput[]
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type CarModelCreateWithoutMakeInput = {
    name: string
    cars?: CarsCreateNestedManyWithoutModelInput
  }

  export type CarModelUncheckedCreateWithoutMakeInput = {
    id?: number
    name: string
    cars?: CarsUncheckedCreateNestedManyWithoutModelInput
  }

  export type CarModelCreateOrConnectWithoutMakeInput = {
    where: CarModelWhereUniqueInput
    create: XOR<CarModelCreateWithoutMakeInput, CarModelUncheckedCreateWithoutMakeInput>
  }

  export type CarModelCreateManyMakeInputEnvelope = {
    data: CarModelCreateManyMakeInput | CarModelCreateManyMakeInput[]
    skipDuplicates?: boolean
  }

  export type CarsCreateWithoutMakeInput = {
    price: number
    year: number
    mileage: number
    createdAt?: Date | string
    updatedAt?: Date | string
    model: CarModelCreateNestedOneWithoutCarsInput
    user: UserCreateNestedOneWithoutCarsInput
    carImages?: CarImagesCreateNestedManyWithoutCarInput
  }

  export type CarsUncheckedCreateWithoutMakeInput = {
    id?: number
    modelId: number
    price: number
    year: number
    mileage: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    carImages?: CarImagesUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarsCreateOrConnectWithoutMakeInput = {
    where: CarsWhereUniqueInput
    create: XOR<CarsCreateWithoutMakeInput, CarsUncheckedCreateWithoutMakeInput>
  }

  export type CarsCreateManyMakeInputEnvelope = {
    data: CarsCreateManyMakeInput | CarsCreateManyMakeInput[]
    skipDuplicates?: boolean
  }

  export type CarModelUpsertWithWhereUniqueWithoutMakeInput = {
    where: CarModelWhereUniqueInput
    update: XOR<CarModelUpdateWithoutMakeInput, CarModelUncheckedUpdateWithoutMakeInput>
    create: XOR<CarModelCreateWithoutMakeInput, CarModelUncheckedCreateWithoutMakeInput>
  }

  export type CarModelUpdateWithWhereUniqueWithoutMakeInput = {
    where: CarModelWhereUniqueInput
    data: XOR<CarModelUpdateWithoutMakeInput, CarModelUncheckedUpdateWithoutMakeInput>
  }

  export type CarModelUpdateManyWithWhereWithoutMakeInput = {
    where: CarModelScalarWhereInput
    data: XOR<CarModelUpdateManyMutationInput, CarModelUncheckedUpdateManyWithoutMakeInput>
  }

  export type CarModelScalarWhereInput = {
    AND?: CarModelScalarWhereInput | CarModelScalarWhereInput[]
    OR?: CarModelScalarWhereInput[]
    NOT?: CarModelScalarWhereInput | CarModelScalarWhereInput[]
    id?: IntFilter<"CarModel"> | number
    name?: StringFilter<"CarModel"> | string
    makeId?: IntFilter<"CarModel"> | number
  }

  export type CarsUpsertWithWhereUniqueWithoutMakeInput = {
    where: CarsWhereUniqueInput
    update: XOR<CarsUpdateWithoutMakeInput, CarsUncheckedUpdateWithoutMakeInput>
    create: XOR<CarsCreateWithoutMakeInput, CarsUncheckedCreateWithoutMakeInput>
  }

  export type CarsUpdateWithWhereUniqueWithoutMakeInput = {
    where: CarsWhereUniqueInput
    data: XOR<CarsUpdateWithoutMakeInput, CarsUncheckedUpdateWithoutMakeInput>
  }

  export type CarsUpdateManyWithWhereWithoutMakeInput = {
    where: CarsScalarWhereInput
    data: XOR<CarsUpdateManyMutationInput, CarsUncheckedUpdateManyWithoutMakeInput>
  }

  export type CarsScalarWhereInput = {
    AND?: CarsScalarWhereInput | CarsScalarWhereInput[]
    OR?: CarsScalarWhereInput[]
    NOT?: CarsScalarWhereInput | CarsScalarWhereInput[]
    id?: IntFilter<"Cars"> | number
    makeId?: IntFilter<"Cars"> | number
    modelId?: IntFilter<"Cars"> | number
    price?: IntFilter<"Cars"> | number
    year?: IntFilter<"Cars"> | number
    mileage?: IntFilter<"Cars"> | number
    userId?: IntFilter<"Cars"> | number
    createdAt?: DateTimeFilter<"Cars"> | Date | string
    updatedAt?: DateTimeFilter<"Cars"> | Date | string
  }

  export type CarMakeCreateWithoutModelsInput = {
    name: string
    countryOfOrigin?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarsCreateNestedManyWithoutMakeInput
  }

  export type CarMakeUncheckedCreateWithoutModelsInput = {
    id?: number
    name: string
    countryOfOrigin?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarsUncheckedCreateNestedManyWithoutMakeInput
  }

  export type CarMakeCreateOrConnectWithoutModelsInput = {
    where: CarMakeWhereUniqueInput
    create: XOR<CarMakeCreateWithoutModelsInput, CarMakeUncheckedCreateWithoutModelsInput>
  }

  export type CarsCreateWithoutModelInput = {
    price: number
    year: number
    mileage: number
    createdAt?: Date | string
    updatedAt?: Date | string
    make: CarMakeCreateNestedOneWithoutCarsInput
    user: UserCreateNestedOneWithoutCarsInput
    carImages?: CarImagesCreateNestedManyWithoutCarInput
  }

  export type CarsUncheckedCreateWithoutModelInput = {
    id?: number
    makeId: number
    price: number
    year: number
    mileage: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    carImages?: CarImagesUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarsCreateOrConnectWithoutModelInput = {
    where: CarsWhereUniqueInput
    create: XOR<CarsCreateWithoutModelInput, CarsUncheckedCreateWithoutModelInput>
  }

  export type CarsCreateManyModelInputEnvelope = {
    data: CarsCreateManyModelInput | CarsCreateManyModelInput[]
    skipDuplicates?: boolean
  }

  export type CarMakeUpsertWithoutModelsInput = {
    update: XOR<CarMakeUpdateWithoutModelsInput, CarMakeUncheckedUpdateWithoutModelsInput>
    create: XOR<CarMakeCreateWithoutModelsInput, CarMakeUncheckedCreateWithoutModelsInput>
    where?: CarMakeWhereInput
  }

  export type CarMakeUpdateToOneWithWhereWithoutModelsInput = {
    where?: CarMakeWhereInput
    data: XOR<CarMakeUpdateWithoutModelsInput, CarMakeUncheckedUpdateWithoutModelsInput>
  }

  export type CarMakeUpdateWithoutModelsInput = {
    name?: StringFieldUpdateOperationsInput | string
    countryOfOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarsUpdateManyWithoutMakeNestedInput
  }

  export type CarMakeUncheckedUpdateWithoutModelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    countryOfOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarsUncheckedUpdateManyWithoutMakeNestedInput
  }

  export type CarsUpsertWithWhereUniqueWithoutModelInput = {
    where: CarsWhereUniqueInput
    update: XOR<CarsUpdateWithoutModelInput, CarsUncheckedUpdateWithoutModelInput>
    create: XOR<CarsCreateWithoutModelInput, CarsUncheckedCreateWithoutModelInput>
  }

  export type CarsUpdateWithWhereUniqueWithoutModelInput = {
    where: CarsWhereUniqueInput
    data: XOR<CarsUpdateWithoutModelInput, CarsUncheckedUpdateWithoutModelInput>
  }

  export type CarsUpdateManyWithWhereWithoutModelInput = {
    where: CarsScalarWhereInput
    data: XOR<CarsUpdateManyMutationInput, CarsUncheckedUpdateManyWithoutModelInput>
  }

  export type CarMakeCreateWithoutCarsInput = {
    name: string
    countryOfOrigin?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: CarModelCreateNestedManyWithoutMakeInput
  }

  export type CarMakeUncheckedCreateWithoutCarsInput = {
    id?: number
    name: string
    countryOfOrigin?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: CarModelUncheckedCreateNestedManyWithoutMakeInput
  }

  export type CarMakeCreateOrConnectWithoutCarsInput = {
    where: CarMakeWhereUniqueInput
    create: XOR<CarMakeCreateWithoutCarsInput, CarMakeUncheckedCreateWithoutCarsInput>
  }

  export type CarModelCreateWithoutCarsInput = {
    name: string
    make: CarMakeCreateNestedOneWithoutModelsInput
  }

  export type CarModelUncheckedCreateWithoutCarsInput = {
    id?: number
    name: string
    makeId: number
  }

  export type CarModelCreateOrConnectWithoutCarsInput = {
    where: CarModelWhereUniqueInput
    create: XOR<CarModelCreateWithoutCarsInput, CarModelUncheckedCreateWithoutCarsInput>
  }

  export type UserCreateWithoutCarsInput = {
    email: string
    firstname: string
    lastname: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutCarsInput = {
    id?: number
    email: string
    firstname: string
    lastname: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutCarsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCarsInput, UserUncheckedCreateWithoutCarsInput>
  }

  export type CarImagesCreateWithoutCarInput = {
    images: ImageCreateNestedOneWithoutCarImagesInput
  }

  export type CarImagesUncheckedCreateWithoutCarInput = {
    id?: number
    imageId: number
  }

  export type CarImagesCreateOrConnectWithoutCarInput = {
    where: CarImagesWhereUniqueInput
    create: XOR<CarImagesCreateWithoutCarInput, CarImagesUncheckedCreateWithoutCarInput>
  }

  export type CarImagesCreateManyCarInputEnvelope = {
    data: CarImagesCreateManyCarInput | CarImagesCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type CarMakeUpsertWithoutCarsInput = {
    update: XOR<CarMakeUpdateWithoutCarsInput, CarMakeUncheckedUpdateWithoutCarsInput>
    create: XOR<CarMakeCreateWithoutCarsInput, CarMakeUncheckedCreateWithoutCarsInput>
    where?: CarMakeWhereInput
  }

  export type CarMakeUpdateToOneWithWhereWithoutCarsInput = {
    where?: CarMakeWhereInput
    data: XOR<CarMakeUpdateWithoutCarsInput, CarMakeUncheckedUpdateWithoutCarsInput>
  }

  export type CarMakeUpdateWithoutCarsInput = {
    name?: StringFieldUpdateOperationsInput | string
    countryOfOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: CarModelUpdateManyWithoutMakeNestedInput
  }

  export type CarMakeUncheckedUpdateWithoutCarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    countryOfOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: CarModelUncheckedUpdateManyWithoutMakeNestedInput
  }

  export type CarModelUpsertWithoutCarsInput = {
    update: XOR<CarModelUpdateWithoutCarsInput, CarModelUncheckedUpdateWithoutCarsInput>
    create: XOR<CarModelCreateWithoutCarsInput, CarModelUncheckedCreateWithoutCarsInput>
    where?: CarModelWhereInput
  }

  export type CarModelUpdateToOneWithWhereWithoutCarsInput = {
    where?: CarModelWhereInput
    data: XOR<CarModelUpdateWithoutCarsInput, CarModelUncheckedUpdateWithoutCarsInput>
  }

  export type CarModelUpdateWithoutCarsInput = {
    name?: StringFieldUpdateOperationsInput | string
    make?: CarMakeUpdateOneRequiredWithoutModelsNestedInput
  }

  export type CarModelUncheckedUpdateWithoutCarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    makeId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutCarsInput = {
    update: XOR<UserUpdateWithoutCarsInput, UserUncheckedUpdateWithoutCarsInput>
    create: XOR<UserCreateWithoutCarsInput, UserUncheckedCreateWithoutCarsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCarsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCarsInput, UserUncheckedUpdateWithoutCarsInput>
  }

  export type UserUpdateWithoutCarsInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutCarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarImagesUpsertWithWhereUniqueWithoutCarInput = {
    where: CarImagesWhereUniqueInput
    update: XOR<CarImagesUpdateWithoutCarInput, CarImagesUncheckedUpdateWithoutCarInput>
    create: XOR<CarImagesCreateWithoutCarInput, CarImagesUncheckedCreateWithoutCarInput>
  }

  export type CarImagesUpdateWithWhereUniqueWithoutCarInput = {
    where: CarImagesWhereUniqueInput
    data: XOR<CarImagesUpdateWithoutCarInput, CarImagesUncheckedUpdateWithoutCarInput>
  }

  export type CarImagesUpdateManyWithWhereWithoutCarInput = {
    where: CarImagesScalarWhereInput
    data: XOR<CarImagesUpdateManyMutationInput, CarImagesUncheckedUpdateManyWithoutCarInput>
  }

  export type CarImagesScalarWhereInput = {
    AND?: CarImagesScalarWhereInput | CarImagesScalarWhereInput[]
    OR?: CarImagesScalarWhereInput[]
    NOT?: CarImagesScalarWhereInput | CarImagesScalarWhereInput[]
    id?: IntFilter<"CarImages"> | number
    carId?: IntFilter<"CarImages"> | number
    imageId?: IntFilter<"CarImages"> | number
  }

  export type CarsCreateWithoutCarImagesInput = {
    price: number
    year: number
    mileage: number
    createdAt?: Date | string
    updatedAt?: Date | string
    make: CarMakeCreateNestedOneWithoutCarsInput
    model: CarModelCreateNestedOneWithoutCarsInput
    user: UserCreateNestedOneWithoutCarsInput
  }

  export type CarsUncheckedCreateWithoutCarImagesInput = {
    id?: number
    makeId: number
    modelId: number
    price: number
    year: number
    mileage: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarsCreateOrConnectWithoutCarImagesInput = {
    where: CarsWhereUniqueInput
    create: XOR<CarsCreateWithoutCarImagesInput, CarsUncheckedCreateWithoutCarImagesInput>
  }

  export type ImageCreateWithoutCarImagesInput = {
    s240File: FileCreateNestedOneWithoutS240ImagesInput
    s480File: FileCreateNestedOneWithoutS480ImagesInput
    s720File: FileCreateNestedOneWithoutS720ImagesInput
    s1080File: FileCreateNestedOneWithoutS1080ImagesInput
  }

  export type ImageUncheckedCreateWithoutCarImagesInput = {
    id?: number
    s240FileId: number
    s480FileId: number
    s720FileId: number
    s1080FileId: number
  }

  export type ImageCreateOrConnectWithoutCarImagesInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutCarImagesInput, ImageUncheckedCreateWithoutCarImagesInput>
  }

  export type CarsUpsertWithoutCarImagesInput = {
    update: XOR<CarsUpdateWithoutCarImagesInput, CarsUncheckedUpdateWithoutCarImagesInput>
    create: XOR<CarsCreateWithoutCarImagesInput, CarsUncheckedCreateWithoutCarImagesInput>
    where?: CarsWhereInput
  }

  export type CarsUpdateToOneWithWhereWithoutCarImagesInput = {
    where?: CarsWhereInput
    data: XOR<CarsUpdateWithoutCarImagesInput, CarsUncheckedUpdateWithoutCarImagesInput>
  }

  export type CarsUpdateWithoutCarImagesInput = {
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    make?: CarMakeUpdateOneRequiredWithoutCarsNestedInput
    model?: CarModelUpdateOneRequiredWithoutCarsNestedInput
    user?: UserUpdateOneRequiredWithoutCarsNestedInput
  }

  export type CarsUncheckedUpdateWithoutCarImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    makeId?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUpsertWithoutCarImagesInput = {
    update: XOR<ImageUpdateWithoutCarImagesInput, ImageUncheckedUpdateWithoutCarImagesInput>
    create: XOR<ImageCreateWithoutCarImagesInput, ImageUncheckedCreateWithoutCarImagesInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutCarImagesInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutCarImagesInput, ImageUncheckedUpdateWithoutCarImagesInput>
  }

  export type ImageUpdateWithoutCarImagesInput = {
    s240File?: FileUpdateOneRequiredWithoutS240ImagesNestedInput
    s480File?: FileUpdateOneRequiredWithoutS480ImagesNestedInput
    s720File?: FileUpdateOneRequiredWithoutS720ImagesNestedInput
    s1080File?: FileUpdateOneRequiredWithoutS1080ImagesNestedInput
  }

  export type ImageUncheckedUpdateWithoutCarImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    s240FileId?: IntFieldUpdateOperationsInput | number
    s480FileId?: IntFieldUpdateOperationsInput | number
    s720FileId?: IntFieldUpdateOperationsInput | number
    s1080FileId?: IntFieldUpdateOperationsInput | number
  }

  export type CarsCreateWithoutUserInput = {
    price: number
    year: number
    mileage: number
    createdAt?: Date | string
    updatedAt?: Date | string
    make: CarMakeCreateNestedOneWithoutCarsInput
    model: CarModelCreateNestedOneWithoutCarsInput
    carImages?: CarImagesCreateNestedManyWithoutCarInput
  }

  export type CarsUncheckedCreateWithoutUserInput = {
    id?: number
    makeId: number
    modelId: number
    price: number
    year: number
    mileage: number
    createdAt?: Date | string
    updatedAt?: Date | string
    carImages?: CarImagesUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarsCreateOrConnectWithoutUserInput = {
    where: CarsWhereUniqueInput
    create: XOR<CarsCreateWithoutUserInput, CarsUncheckedCreateWithoutUserInput>
  }

  export type CarsCreateManyUserInputEnvelope = {
    data: CarsCreateManyUserInput | CarsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CarsUpsertWithWhereUniqueWithoutUserInput = {
    where: CarsWhereUniqueInput
    update: XOR<CarsUpdateWithoutUserInput, CarsUncheckedUpdateWithoutUserInput>
    create: XOR<CarsCreateWithoutUserInput, CarsUncheckedCreateWithoutUserInput>
  }

  export type CarsUpdateWithWhereUniqueWithoutUserInput = {
    where: CarsWhereUniqueInput
    data: XOR<CarsUpdateWithoutUserInput, CarsUncheckedUpdateWithoutUserInput>
  }

  export type CarsUpdateManyWithWhereWithoutUserInput = {
    where: CarsScalarWhereInput
    data: XOR<CarsUpdateManyMutationInput, CarsUncheckedUpdateManyWithoutUserInput>
  }

  export type ImageCreateWithoutS240FileInput = {
    s480File: FileCreateNestedOneWithoutS480ImagesInput
    s720File: FileCreateNestedOneWithoutS720ImagesInput
    s1080File: FileCreateNestedOneWithoutS1080ImagesInput
    CarImages?: CarImagesCreateNestedManyWithoutImagesInput
  }

  export type ImageUncheckedCreateWithoutS240FileInput = {
    id?: number
    s480FileId: number
    s720FileId: number
    s1080FileId: number
    CarImages?: CarImagesUncheckedCreateNestedManyWithoutImagesInput
  }

  export type ImageCreateOrConnectWithoutS240FileInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutS240FileInput, ImageUncheckedCreateWithoutS240FileInput>
  }

  export type ImageCreateManyS240FileInputEnvelope = {
    data: ImageCreateManyS240FileInput | ImageCreateManyS240FileInput[]
    skipDuplicates?: boolean
  }

  export type ImageCreateWithoutS480FileInput = {
    s240File: FileCreateNestedOneWithoutS240ImagesInput
    s720File: FileCreateNestedOneWithoutS720ImagesInput
    s1080File: FileCreateNestedOneWithoutS1080ImagesInput
    CarImages?: CarImagesCreateNestedManyWithoutImagesInput
  }

  export type ImageUncheckedCreateWithoutS480FileInput = {
    id?: number
    s240FileId: number
    s720FileId: number
    s1080FileId: number
    CarImages?: CarImagesUncheckedCreateNestedManyWithoutImagesInput
  }

  export type ImageCreateOrConnectWithoutS480FileInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutS480FileInput, ImageUncheckedCreateWithoutS480FileInput>
  }

  export type ImageCreateManyS480FileInputEnvelope = {
    data: ImageCreateManyS480FileInput | ImageCreateManyS480FileInput[]
    skipDuplicates?: boolean
  }

  export type ImageCreateWithoutS720FileInput = {
    s240File: FileCreateNestedOneWithoutS240ImagesInput
    s480File: FileCreateNestedOneWithoutS480ImagesInput
    s1080File: FileCreateNestedOneWithoutS1080ImagesInput
    CarImages?: CarImagesCreateNestedManyWithoutImagesInput
  }

  export type ImageUncheckedCreateWithoutS720FileInput = {
    id?: number
    s240FileId: number
    s480FileId: number
    s1080FileId: number
    CarImages?: CarImagesUncheckedCreateNestedManyWithoutImagesInput
  }

  export type ImageCreateOrConnectWithoutS720FileInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutS720FileInput, ImageUncheckedCreateWithoutS720FileInput>
  }

  export type ImageCreateManyS720FileInputEnvelope = {
    data: ImageCreateManyS720FileInput | ImageCreateManyS720FileInput[]
    skipDuplicates?: boolean
  }

  export type ImageCreateWithoutS1080FileInput = {
    s240File: FileCreateNestedOneWithoutS240ImagesInput
    s480File: FileCreateNestedOneWithoutS480ImagesInput
    s720File: FileCreateNestedOneWithoutS720ImagesInput
    CarImages?: CarImagesCreateNestedManyWithoutImagesInput
  }

  export type ImageUncheckedCreateWithoutS1080FileInput = {
    id?: number
    s240FileId: number
    s480FileId: number
    s720FileId: number
    CarImages?: CarImagesUncheckedCreateNestedManyWithoutImagesInput
  }

  export type ImageCreateOrConnectWithoutS1080FileInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutS1080FileInput, ImageUncheckedCreateWithoutS1080FileInput>
  }

  export type ImageCreateManyS1080FileInputEnvelope = {
    data: ImageCreateManyS1080FileInput | ImageCreateManyS1080FileInput[]
    skipDuplicates?: boolean
  }

  export type ImageUpsertWithWhereUniqueWithoutS240FileInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutS240FileInput, ImageUncheckedUpdateWithoutS240FileInput>
    create: XOR<ImageCreateWithoutS240FileInput, ImageUncheckedCreateWithoutS240FileInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutS240FileInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutS240FileInput, ImageUncheckedUpdateWithoutS240FileInput>
  }

  export type ImageUpdateManyWithWhereWithoutS240FileInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutS240FileInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: IntFilter<"Image"> | number
    s240FileId?: IntFilter<"Image"> | number
    s480FileId?: IntFilter<"Image"> | number
    s720FileId?: IntFilter<"Image"> | number
    s1080FileId?: IntFilter<"Image"> | number
  }

  export type ImageUpsertWithWhereUniqueWithoutS480FileInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutS480FileInput, ImageUncheckedUpdateWithoutS480FileInput>
    create: XOR<ImageCreateWithoutS480FileInput, ImageUncheckedCreateWithoutS480FileInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutS480FileInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutS480FileInput, ImageUncheckedUpdateWithoutS480FileInput>
  }

  export type ImageUpdateManyWithWhereWithoutS480FileInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutS480FileInput>
  }

  export type ImageUpsertWithWhereUniqueWithoutS720FileInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutS720FileInput, ImageUncheckedUpdateWithoutS720FileInput>
    create: XOR<ImageCreateWithoutS720FileInput, ImageUncheckedCreateWithoutS720FileInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutS720FileInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutS720FileInput, ImageUncheckedUpdateWithoutS720FileInput>
  }

  export type ImageUpdateManyWithWhereWithoutS720FileInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutS720FileInput>
  }

  export type ImageUpsertWithWhereUniqueWithoutS1080FileInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutS1080FileInput, ImageUncheckedUpdateWithoutS1080FileInput>
    create: XOR<ImageCreateWithoutS1080FileInput, ImageUncheckedCreateWithoutS1080FileInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutS1080FileInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutS1080FileInput, ImageUncheckedUpdateWithoutS1080FileInput>
  }

  export type ImageUpdateManyWithWhereWithoutS1080FileInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutS1080FileInput>
  }

  export type FileCreateWithoutS240ImagesInput = {
    url: string
    mimeType: string
    size: number
    createdAt?: Date | string
    toDeleteAt?: Date | string
    s480Images?: ImageCreateNestedManyWithoutS480FileInput
    s720Images?: ImageCreateNestedManyWithoutS720FileInput
    s1080Images?: ImageCreateNestedManyWithoutS1080FileInput
  }

  export type FileUncheckedCreateWithoutS240ImagesInput = {
    id?: number
    url: string
    mimeType: string
    size: number
    createdAt?: Date | string
    toDeleteAt?: Date | string
    s480Images?: ImageUncheckedCreateNestedManyWithoutS480FileInput
    s720Images?: ImageUncheckedCreateNestedManyWithoutS720FileInput
    s1080Images?: ImageUncheckedCreateNestedManyWithoutS1080FileInput
  }

  export type FileCreateOrConnectWithoutS240ImagesInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutS240ImagesInput, FileUncheckedCreateWithoutS240ImagesInput>
  }

  export type FileCreateWithoutS480ImagesInput = {
    url: string
    mimeType: string
    size: number
    createdAt?: Date | string
    toDeleteAt?: Date | string
    s240Images?: ImageCreateNestedManyWithoutS240FileInput
    s720Images?: ImageCreateNestedManyWithoutS720FileInput
    s1080Images?: ImageCreateNestedManyWithoutS1080FileInput
  }

  export type FileUncheckedCreateWithoutS480ImagesInput = {
    id?: number
    url: string
    mimeType: string
    size: number
    createdAt?: Date | string
    toDeleteAt?: Date | string
    s240Images?: ImageUncheckedCreateNestedManyWithoutS240FileInput
    s720Images?: ImageUncheckedCreateNestedManyWithoutS720FileInput
    s1080Images?: ImageUncheckedCreateNestedManyWithoutS1080FileInput
  }

  export type FileCreateOrConnectWithoutS480ImagesInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutS480ImagesInput, FileUncheckedCreateWithoutS480ImagesInput>
  }

  export type FileCreateWithoutS720ImagesInput = {
    url: string
    mimeType: string
    size: number
    createdAt?: Date | string
    toDeleteAt?: Date | string
    s240Images?: ImageCreateNestedManyWithoutS240FileInput
    s480Images?: ImageCreateNestedManyWithoutS480FileInput
    s1080Images?: ImageCreateNestedManyWithoutS1080FileInput
  }

  export type FileUncheckedCreateWithoutS720ImagesInput = {
    id?: number
    url: string
    mimeType: string
    size: number
    createdAt?: Date | string
    toDeleteAt?: Date | string
    s240Images?: ImageUncheckedCreateNestedManyWithoutS240FileInput
    s480Images?: ImageUncheckedCreateNestedManyWithoutS480FileInput
    s1080Images?: ImageUncheckedCreateNestedManyWithoutS1080FileInput
  }

  export type FileCreateOrConnectWithoutS720ImagesInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutS720ImagesInput, FileUncheckedCreateWithoutS720ImagesInput>
  }

  export type FileCreateWithoutS1080ImagesInput = {
    url: string
    mimeType: string
    size: number
    createdAt?: Date | string
    toDeleteAt?: Date | string
    s240Images?: ImageCreateNestedManyWithoutS240FileInput
    s480Images?: ImageCreateNestedManyWithoutS480FileInput
    s720Images?: ImageCreateNestedManyWithoutS720FileInput
  }

  export type FileUncheckedCreateWithoutS1080ImagesInput = {
    id?: number
    url: string
    mimeType: string
    size: number
    createdAt?: Date | string
    toDeleteAt?: Date | string
    s240Images?: ImageUncheckedCreateNestedManyWithoutS240FileInput
    s480Images?: ImageUncheckedCreateNestedManyWithoutS480FileInput
    s720Images?: ImageUncheckedCreateNestedManyWithoutS720FileInput
  }

  export type FileCreateOrConnectWithoutS1080ImagesInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutS1080ImagesInput, FileUncheckedCreateWithoutS1080ImagesInput>
  }

  export type CarImagesCreateWithoutImagesInput = {
    car: CarsCreateNestedOneWithoutCarImagesInput
  }

  export type CarImagesUncheckedCreateWithoutImagesInput = {
    id?: number
    carId: number
  }

  export type CarImagesCreateOrConnectWithoutImagesInput = {
    where: CarImagesWhereUniqueInput
    create: XOR<CarImagesCreateWithoutImagesInput, CarImagesUncheckedCreateWithoutImagesInput>
  }

  export type CarImagesCreateManyImagesInputEnvelope = {
    data: CarImagesCreateManyImagesInput | CarImagesCreateManyImagesInput[]
    skipDuplicates?: boolean
  }

  export type FileUpsertWithoutS240ImagesInput = {
    update: XOR<FileUpdateWithoutS240ImagesInput, FileUncheckedUpdateWithoutS240ImagesInput>
    create: XOR<FileCreateWithoutS240ImagesInput, FileUncheckedCreateWithoutS240ImagesInput>
    where?: FileWhereInput
  }

  export type FileUpdateToOneWithWhereWithoutS240ImagesInput = {
    where?: FileWhereInput
    data: XOR<FileUpdateWithoutS240ImagesInput, FileUncheckedUpdateWithoutS240ImagesInput>
  }

  export type FileUpdateWithoutS240ImagesInput = {
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toDeleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    s480Images?: ImageUpdateManyWithoutS480FileNestedInput
    s720Images?: ImageUpdateManyWithoutS720FileNestedInput
    s1080Images?: ImageUpdateManyWithoutS1080FileNestedInput
  }

  export type FileUncheckedUpdateWithoutS240ImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toDeleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    s480Images?: ImageUncheckedUpdateManyWithoutS480FileNestedInput
    s720Images?: ImageUncheckedUpdateManyWithoutS720FileNestedInput
    s1080Images?: ImageUncheckedUpdateManyWithoutS1080FileNestedInput
  }

  export type FileUpsertWithoutS480ImagesInput = {
    update: XOR<FileUpdateWithoutS480ImagesInput, FileUncheckedUpdateWithoutS480ImagesInput>
    create: XOR<FileCreateWithoutS480ImagesInput, FileUncheckedCreateWithoutS480ImagesInput>
    where?: FileWhereInput
  }

  export type FileUpdateToOneWithWhereWithoutS480ImagesInput = {
    where?: FileWhereInput
    data: XOR<FileUpdateWithoutS480ImagesInput, FileUncheckedUpdateWithoutS480ImagesInput>
  }

  export type FileUpdateWithoutS480ImagesInput = {
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toDeleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    s240Images?: ImageUpdateManyWithoutS240FileNestedInput
    s720Images?: ImageUpdateManyWithoutS720FileNestedInput
    s1080Images?: ImageUpdateManyWithoutS1080FileNestedInput
  }

  export type FileUncheckedUpdateWithoutS480ImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toDeleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    s240Images?: ImageUncheckedUpdateManyWithoutS240FileNestedInput
    s720Images?: ImageUncheckedUpdateManyWithoutS720FileNestedInput
    s1080Images?: ImageUncheckedUpdateManyWithoutS1080FileNestedInput
  }

  export type FileUpsertWithoutS720ImagesInput = {
    update: XOR<FileUpdateWithoutS720ImagesInput, FileUncheckedUpdateWithoutS720ImagesInput>
    create: XOR<FileCreateWithoutS720ImagesInput, FileUncheckedCreateWithoutS720ImagesInput>
    where?: FileWhereInput
  }

  export type FileUpdateToOneWithWhereWithoutS720ImagesInput = {
    where?: FileWhereInput
    data: XOR<FileUpdateWithoutS720ImagesInput, FileUncheckedUpdateWithoutS720ImagesInput>
  }

  export type FileUpdateWithoutS720ImagesInput = {
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toDeleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    s240Images?: ImageUpdateManyWithoutS240FileNestedInput
    s480Images?: ImageUpdateManyWithoutS480FileNestedInput
    s1080Images?: ImageUpdateManyWithoutS1080FileNestedInput
  }

  export type FileUncheckedUpdateWithoutS720ImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toDeleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    s240Images?: ImageUncheckedUpdateManyWithoutS240FileNestedInput
    s480Images?: ImageUncheckedUpdateManyWithoutS480FileNestedInput
    s1080Images?: ImageUncheckedUpdateManyWithoutS1080FileNestedInput
  }

  export type FileUpsertWithoutS1080ImagesInput = {
    update: XOR<FileUpdateWithoutS1080ImagesInput, FileUncheckedUpdateWithoutS1080ImagesInput>
    create: XOR<FileCreateWithoutS1080ImagesInput, FileUncheckedCreateWithoutS1080ImagesInput>
    where?: FileWhereInput
  }

  export type FileUpdateToOneWithWhereWithoutS1080ImagesInput = {
    where?: FileWhereInput
    data: XOR<FileUpdateWithoutS1080ImagesInput, FileUncheckedUpdateWithoutS1080ImagesInput>
  }

  export type FileUpdateWithoutS1080ImagesInput = {
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toDeleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    s240Images?: ImageUpdateManyWithoutS240FileNestedInput
    s480Images?: ImageUpdateManyWithoutS480FileNestedInput
    s720Images?: ImageUpdateManyWithoutS720FileNestedInput
  }

  export type FileUncheckedUpdateWithoutS1080ImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toDeleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    s240Images?: ImageUncheckedUpdateManyWithoutS240FileNestedInput
    s480Images?: ImageUncheckedUpdateManyWithoutS480FileNestedInput
    s720Images?: ImageUncheckedUpdateManyWithoutS720FileNestedInput
  }

  export type CarImagesUpsertWithWhereUniqueWithoutImagesInput = {
    where: CarImagesWhereUniqueInput
    update: XOR<CarImagesUpdateWithoutImagesInput, CarImagesUncheckedUpdateWithoutImagesInput>
    create: XOR<CarImagesCreateWithoutImagesInput, CarImagesUncheckedCreateWithoutImagesInput>
  }

  export type CarImagesUpdateWithWhereUniqueWithoutImagesInput = {
    where: CarImagesWhereUniqueInput
    data: XOR<CarImagesUpdateWithoutImagesInput, CarImagesUncheckedUpdateWithoutImagesInput>
  }

  export type CarImagesUpdateManyWithWhereWithoutImagesInput = {
    where: CarImagesScalarWhereInput
    data: XOR<CarImagesUpdateManyMutationInput, CarImagesUncheckedUpdateManyWithoutImagesInput>
  }

  export type CarModelCreateManyMakeInput = {
    id?: number
    name: string
  }

  export type CarsCreateManyMakeInput = {
    id?: number
    modelId: number
    price: number
    year: number
    mileage: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarModelUpdateWithoutMakeInput = {
    name?: StringFieldUpdateOperationsInput | string
    cars?: CarsUpdateManyWithoutModelNestedInput
  }

  export type CarModelUncheckedUpdateWithoutMakeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cars?: CarsUncheckedUpdateManyWithoutModelNestedInput
  }

  export type CarModelUncheckedUpdateManyWithoutMakeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CarsUpdateWithoutMakeInput = {
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    model?: CarModelUpdateOneRequiredWithoutCarsNestedInput
    user?: UserUpdateOneRequiredWithoutCarsNestedInput
    carImages?: CarImagesUpdateManyWithoutCarNestedInput
  }

  export type CarsUncheckedUpdateWithoutMakeInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carImages?: CarImagesUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarsUncheckedUpdateManyWithoutMakeInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarsCreateManyModelInput = {
    id?: number
    makeId: number
    price: number
    year: number
    mileage: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarsUpdateWithoutModelInput = {
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    make?: CarMakeUpdateOneRequiredWithoutCarsNestedInput
    user?: UserUpdateOneRequiredWithoutCarsNestedInput
    carImages?: CarImagesUpdateManyWithoutCarNestedInput
  }

  export type CarsUncheckedUpdateWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    makeId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carImages?: CarImagesUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarsUncheckedUpdateManyWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    makeId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarImagesCreateManyCarInput = {
    id?: number
    imageId: number
  }

  export type CarImagesUpdateWithoutCarInput = {
    images?: ImageUpdateOneRequiredWithoutCarImagesNestedInput
  }

  export type CarImagesUncheckedUpdateWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
  }

  export type CarImagesUncheckedUpdateManyWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
  }

  export type CarsCreateManyUserInput = {
    id?: number
    makeId: number
    modelId: number
    price: number
    year: number
    mileage: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarsUpdateWithoutUserInput = {
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    make?: CarMakeUpdateOneRequiredWithoutCarsNestedInput
    model?: CarModelUpdateOneRequiredWithoutCarsNestedInput
    carImages?: CarImagesUpdateManyWithoutCarNestedInput
  }

  export type CarsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    makeId?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carImages?: CarImagesUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    makeId?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyS240FileInput = {
    id?: number
    s480FileId: number
    s720FileId: number
    s1080FileId: number
  }

  export type ImageCreateManyS480FileInput = {
    id?: number
    s240FileId: number
    s720FileId: number
    s1080FileId: number
  }

  export type ImageCreateManyS720FileInput = {
    id?: number
    s240FileId: number
    s480FileId: number
    s1080FileId: number
  }

  export type ImageCreateManyS1080FileInput = {
    id?: number
    s240FileId: number
    s480FileId: number
    s720FileId: number
  }

  export type ImageUpdateWithoutS240FileInput = {
    s480File?: FileUpdateOneRequiredWithoutS480ImagesNestedInput
    s720File?: FileUpdateOneRequiredWithoutS720ImagesNestedInput
    s1080File?: FileUpdateOneRequiredWithoutS1080ImagesNestedInput
    CarImages?: CarImagesUpdateManyWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateWithoutS240FileInput = {
    id?: IntFieldUpdateOperationsInput | number
    s480FileId?: IntFieldUpdateOperationsInput | number
    s720FileId?: IntFieldUpdateOperationsInput | number
    s1080FileId?: IntFieldUpdateOperationsInput | number
    CarImages?: CarImagesUncheckedUpdateManyWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateManyWithoutS240FileInput = {
    id?: IntFieldUpdateOperationsInput | number
    s480FileId?: IntFieldUpdateOperationsInput | number
    s720FileId?: IntFieldUpdateOperationsInput | number
    s1080FileId?: IntFieldUpdateOperationsInput | number
  }

  export type ImageUpdateWithoutS480FileInput = {
    s240File?: FileUpdateOneRequiredWithoutS240ImagesNestedInput
    s720File?: FileUpdateOneRequiredWithoutS720ImagesNestedInput
    s1080File?: FileUpdateOneRequiredWithoutS1080ImagesNestedInput
    CarImages?: CarImagesUpdateManyWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateWithoutS480FileInput = {
    id?: IntFieldUpdateOperationsInput | number
    s240FileId?: IntFieldUpdateOperationsInput | number
    s720FileId?: IntFieldUpdateOperationsInput | number
    s1080FileId?: IntFieldUpdateOperationsInput | number
    CarImages?: CarImagesUncheckedUpdateManyWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateManyWithoutS480FileInput = {
    id?: IntFieldUpdateOperationsInput | number
    s240FileId?: IntFieldUpdateOperationsInput | number
    s720FileId?: IntFieldUpdateOperationsInput | number
    s1080FileId?: IntFieldUpdateOperationsInput | number
  }

  export type ImageUpdateWithoutS720FileInput = {
    s240File?: FileUpdateOneRequiredWithoutS240ImagesNestedInput
    s480File?: FileUpdateOneRequiredWithoutS480ImagesNestedInput
    s1080File?: FileUpdateOneRequiredWithoutS1080ImagesNestedInput
    CarImages?: CarImagesUpdateManyWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateWithoutS720FileInput = {
    id?: IntFieldUpdateOperationsInput | number
    s240FileId?: IntFieldUpdateOperationsInput | number
    s480FileId?: IntFieldUpdateOperationsInput | number
    s1080FileId?: IntFieldUpdateOperationsInput | number
    CarImages?: CarImagesUncheckedUpdateManyWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateManyWithoutS720FileInput = {
    id?: IntFieldUpdateOperationsInput | number
    s240FileId?: IntFieldUpdateOperationsInput | number
    s480FileId?: IntFieldUpdateOperationsInput | number
    s1080FileId?: IntFieldUpdateOperationsInput | number
  }

  export type ImageUpdateWithoutS1080FileInput = {
    s240File?: FileUpdateOneRequiredWithoutS240ImagesNestedInput
    s480File?: FileUpdateOneRequiredWithoutS480ImagesNestedInput
    s720File?: FileUpdateOneRequiredWithoutS720ImagesNestedInput
    CarImages?: CarImagesUpdateManyWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateWithoutS1080FileInput = {
    id?: IntFieldUpdateOperationsInput | number
    s240FileId?: IntFieldUpdateOperationsInput | number
    s480FileId?: IntFieldUpdateOperationsInput | number
    s720FileId?: IntFieldUpdateOperationsInput | number
    CarImages?: CarImagesUncheckedUpdateManyWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateManyWithoutS1080FileInput = {
    id?: IntFieldUpdateOperationsInput | number
    s240FileId?: IntFieldUpdateOperationsInput | number
    s480FileId?: IntFieldUpdateOperationsInput | number
    s720FileId?: IntFieldUpdateOperationsInput | number
  }

  export type CarImagesCreateManyImagesInput = {
    id?: number
    carId: number
  }

  export type CarImagesUpdateWithoutImagesInput = {
    car?: CarsUpdateOneRequiredWithoutCarImagesNestedInput
  }

  export type CarImagesUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
  }

  export type CarImagesUncheckedUpdateManyWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
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