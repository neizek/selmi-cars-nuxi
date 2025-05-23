
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
 * Model Views
 * 
 */
export type Views = $Result.DefaultSelection<Prisma.$ViewsPayload>
/**
 * Model Visitors
 * 
 */
export type Visitors = $Result.DefaultSelection<Prisma.$VisitorsPayload>
/**
 * Model Favorites
 * 
 */
export type Favorites = $Result.DefaultSelection<Prisma.$FavoritesPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Entity
 * 
 */
export type Entity = $Result.DefaultSelection<Prisma.$EntityPayload>
/**
 * Model Reviews
 * 
 */
export type Reviews = $Result.DefaultSelection<Prisma.$ReviewsPayload>
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
   * `prisma.views`: Exposes CRUD operations for the **Views** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Views
    * const views = await prisma.views.findMany()
    * ```
    */
  get views(): Prisma.ViewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visitors`: Exposes CRUD operations for the **Visitors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visitors
    * const visitors = await prisma.visitors.findMany()
    * ```
    */
  get visitors(): Prisma.VisitorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorites`: Exposes CRUD operations for the **Favorites** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorites.findMany()
    * ```
    */
  get favorites(): Prisma.FavoritesDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.reviews`: Exposes CRUD operations for the **Reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.ReviewsDelegate<ExtArgs, ClientOptions>;

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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Views: 'Views',
    Visitors: 'Visitors',
    Favorites: 'Favorites',
    User: 'User',
    Message: 'Message',
    Entity: 'Entity',
    Reviews: 'Reviews',
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
      modelProps: "carMake" | "carModel" | "cars" | "carImages" | "views" | "visitors" | "favorites" | "user" | "message" | "entity" | "reviews" | "file" | "image"
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
      Views: {
        payload: Prisma.$ViewsPayload<ExtArgs>
        fields: Prisma.ViewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          findFirst: {
            args: Prisma.ViewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          findMany: {
            args: Prisma.ViewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>[]
          }
          create: {
            args: Prisma.ViewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          createMany: {
            args: Prisma.ViewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>[]
          }
          delete: {
            args: Prisma.ViewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          update: {
            args: Prisma.ViewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          deleteMany: {
            args: Prisma.ViewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ViewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>[]
          }
          upsert: {
            args: Prisma.ViewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          aggregate: {
            args: Prisma.ViewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViews>
          }
          groupBy: {
            args: Prisma.ViewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViewsCountArgs<ExtArgs>
            result: $Utils.Optional<ViewsCountAggregateOutputType> | number
          }
        }
      }
      Visitors: {
        payload: Prisma.$VisitorsPayload<ExtArgs>
        fields: Prisma.VisitorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorsPayload>
          }
          findFirst: {
            args: Prisma.VisitorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorsPayload>
          }
          findMany: {
            args: Prisma.VisitorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorsPayload>[]
          }
          create: {
            args: Prisma.VisitorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorsPayload>
          }
          createMany: {
            args: Prisma.VisitorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisitorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorsPayload>[]
          }
          delete: {
            args: Prisma.VisitorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorsPayload>
          }
          update: {
            args: Prisma.VisitorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorsPayload>
          }
          deleteMany: {
            args: Prisma.VisitorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisitorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisitorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorsPayload>[]
          }
          upsert: {
            args: Prisma.VisitorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorsPayload>
          }
          aggregate: {
            args: Prisma.VisitorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisitors>
          }
          groupBy: {
            args: Prisma.VisitorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisitorsCountArgs<ExtArgs>
            result: $Utils.Optional<VisitorsCountAggregateOutputType> | number
          }
        }
      }
      Favorites: {
        payload: Prisma.$FavoritesPayload<ExtArgs>
        fields: Prisma.FavoritesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoritesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoritesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritesPayload>
          }
          findFirst: {
            args: Prisma.FavoritesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoritesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritesPayload>
          }
          findMany: {
            args: Prisma.FavoritesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritesPayload>[]
          }
          create: {
            args: Prisma.FavoritesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritesPayload>
          }
          createMany: {
            args: Prisma.FavoritesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoritesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritesPayload>[]
          }
          delete: {
            args: Prisma.FavoritesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritesPayload>
          }
          update: {
            args: Prisma.FavoritesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritesPayload>
          }
          deleteMany: {
            args: Prisma.FavoritesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoritesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoritesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritesPayload>[]
          }
          upsert: {
            args: Prisma.FavoritesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritesPayload>
          }
          aggregate: {
            args: Prisma.FavoritesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorites>
          }
          groupBy: {
            args: Prisma.FavoritesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoritesGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoritesCountArgs<ExtArgs>
            result: $Utils.Optional<FavoritesCountAggregateOutputType> | number
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
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
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
      Reviews: {
        payload: Prisma.$ReviewsPayload<ExtArgs>
        fields: Prisma.ReviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findFirst: {
            args: Prisma.ReviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findMany: {
            args: Prisma.ReviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          create: {
            args: Prisma.ReviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          createMany: {
            args: Prisma.ReviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          delete: {
            args: Prisma.ReviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          update: {
            args: Prisma.ReviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          deleteMany: {
            args: Prisma.ReviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          upsert: {
            args: Prisma.ReviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.ReviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
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
    views?: ViewsOmit
    visitors?: VisitorsOmit
    favorites?: FavoritesOmit
    user?: UserOmit
    message?: MessageOmit
    entity?: EntityOmit
    reviews?: ReviewsOmit
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
    views: number
    favorites: number
  }

  export type CarsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carImages?: boolean | CarsCountOutputTypeCountCarImagesArgs
    views?: boolean | CarsCountOutputTypeCountViewsArgs
    favorites?: boolean | CarsCountOutputTypeCountFavoritesArgs
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
   * CarsCountOutputType without action
   */
  export type CarsCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewsWhereInput
  }

  /**
   * CarsCountOutputType without action
   */
  export type CarsCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritesWhereInput
  }


  /**
   * Count Type VisitorsCountOutputType
   */

  export type VisitorsCountOutputType = {
    views: number
  }

  export type VisitorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    views?: boolean | VisitorsCountOutputTypeCountViewsArgs
  }

  // Custom InputTypes
  /**
   * VisitorsCountOutputType without action
   */
  export type VisitorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorsCountOutputType
     */
    select?: VisitorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VisitorsCountOutputType without action
   */
  export type VisitorsCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewsWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    cars: number
    entity: number
    reviews: number
    reviewed: number
    views: number
    favorites: number
    sentMessages: number
    receivedMessages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | UserCountOutputTypeCountCarsArgs
    entity?: boolean | UserCountOutputTypeCountEntityArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    reviewed?: boolean | UserCountOutputTypeCountReviewedArgs
    views?: boolean | UserCountOutputTypeCountViewsArgs
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    receivedMessages?: boolean | UserCountOutputTypeCountReceivedMessagesArgs
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
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEntityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type EntityCountOutputType
   */

  export type EntityCountOutputType = {
    reviews: number
  }

  export type EntityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | EntityCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * EntityCountOutputType without action
   */
  export type EntityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityCountOutputType
     */
    select?: EntityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EntityCountOutputType without action
   */
  export type EntityCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
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
    slug: string | null
    countryOfOrigin: string | null
    logoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarMakeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    countryOfOrigin: string | null
    logoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarMakeCountAggregateOutputType = {
    id: number
    name: number
    slug: number
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
    slug?: true
    countryOfOrigin?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarMakeMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    countryOfOrigin?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarMakeCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
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
    slug: string
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
    slug?: boolean
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
    slug?: boolean
    countryOfOrigin?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["carMake"]>

  export type CarMakeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    countryOfOrigin?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["carMake"]>

  export type CarMakeSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    countryOfOrigin?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CarMakeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "countryOfOrigin" | "logoUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["carMake"]>
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
      slug: string
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
    readonly slug: FieldRef<"CarMake", 'String'>
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
    slug: string | null
    makeId: number | null
  }

  export type CarModelMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    makeId: number | null
  }

  export type CarModelCountAggregateOutputType = {
    id: number
    name: number
    slug: number
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
    slug?: true
    makeId?: true
  }

  export type CarModelMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    makeId?: true
  }

  export type CarModelCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
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
    slug: string
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
    slug?: boolean
    makeId?: boolean
    make?: boolean | CarMakeDefaultArgs<ExtArgs>
    cars?: boolean | CarModel$carsArgs<ExtArgs>
    _count?: boolean | CarModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carModel"]>

  export type CarModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    makeId?: boolean
    make?: boolean | CarMakeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carModel"]>

  export type CarModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    makeId?: boolean
    make?: boolean | CarMakeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carModel"]>

  export type CarModelSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    makeId?: boolean
  }

  export type CarModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "makeId", ExtArgs["result"]["carModel"]>
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
      slug: string
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
    readonly slug: FieldRef<"CarModel", 'String'>
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
    engineVolume: number | null
    userId: number | null
  }

  export type CarsSumAggregateOutputType = {
    id: number | null
    makeId: number | null
    modelId: number | null
    price: number | null
    year: number | null
    mileage: number | null
    engineVolume: number | null
    userId: number | null
  }

  export type CarsMinAggregateOutputType = {
    id: number | null
    makeId: number | null
    modelId: number | null
    price: number | null
    year: number | null
    mileage: number | null
    transmissionType: $Enums.TransmissionType | null
    fuelType: $Enums.FuelType | null
    bodyStyle: $Enums.BodyStyle | null
    engineVolume: number | null
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
    transmissionType: $Enums.TransmissionType | null
    fuelType: $Enums.FuelType | null
    bodyStyle: $Enums.BodyStyle | null
    engineVolume: number | null
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
    transmissionType: number
    fuelType: number
    bodyStyle: number
    engineVolume: number
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
    engineVolume?: true
    userId?: true
  }

  export type CarsSumAggregateInputType = {
    id?: true
    makeId?: true
    modelId?: true
    price?: true
    year?: true
    mileage?: true
    engineVolume?: true
    userId?: true
  }

  export type CarsMinAggregateInputType = {
    id?: true
    makeId?: true
    modelId?: true
    price?: true
    year?: true
    mileage?: true
    transmissionType?: true
    fuelType?: true
    bodyStyle?: true
    engineVolume?: true
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
    transmissionType?: true
    fuelType?: true
    bodyStyle?: true
    engineVolume?: true
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
    transmissionType?: true
    fuelType?: true
    bodyStyle?: true
    engineVolume?: true
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
    transmissionType: $Enums.TransmissionType
    fuelType: $Enums.FuelType
    bodyStyle: $Enums.BodyStyle
    engineVolume: number
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
    transmissionType?: boolean
    fuelType?: boolean
    bodyStyle?: boolean
    engineVolume?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    make?: boolean | CarMakeDefaultArgs<ExtArgs>
    model?: boolean | CarModelDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    carImages?: boolean | Cars$carImagesArgs<ExtArgs>
    views?: boolean | Cars$viewsArgs<ExtArgs>
    favorites?: boolean | Cars$favoritesArgs<ExtArgs>
    _count?: boolean | CarsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cars"]>

  export type CarsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    makeId?: boolean
    modelId?: boolean
    price?: boolean
    year?: boolean
    mileage?: boolean
    transmissionType?: boolean
    fuelType?: boolean
    bodyStyle?: boolean
    engineVolume?: boolean
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
    transmissionType?: boolean
    fuelType?: boolean
    bodyStyle?: boolean
    engineVolume?: boolean
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
    transmissionType?: boolean
    fuelType?: boolean
    bodyStyle?: boolean
    engineVolume?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CarsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "makeId" | "modelId" | "price" | "year" | "mileage" | "transmissionType" | "fuelType" | "bodyStyle" | "engineVolume" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["cars"]>
  export type CarsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    make?: boolean | CarMakeDefaultArgs<ExtArgs>
    model?: boolean | CarModelDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    carImages?: boolean | Cars$carImagesArgs<ExtArgs>
    views?: boolean | Cars$viewsArgs<ExtArgs>
    favorites?: boolean | Cars$favoritesArgs<ExtArgs>
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
      views: Prisma.$ViewsPayload<ExtArgs>[]
      favorites: Prisma.$FavoritesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      makeId: number
      modelId: number
      price: number
      year: number
      mileage: number
      transmissionType: $Enums.TransmissionType
      fuelType: $Enums.FuelType
      bodyStyle: $Enums.BodyStyle
      engineVolume: number
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
    views<T extends Cars$viewsArgs<ExtArgs> = {}>(args?: Subset<T, Cars$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends Cars$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, Cars$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly transmissionType: FieldRef<"Cars", 'TransmissionType'>
    readonly fuelType: FieldRef<"Cars", 'FuelType'>
    readonly bodyStyle: FieldRef<"Cars", 'BodyStyle'>
    readonly engineVolume: FieldRef<"Cars", 'Float'>
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
   * Cars.views
   */
  export type Cars$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    where?: ViewsWhereInput
    orderBy?: ViewsOrderByWithRelationInput | ViewsOrderByWithRelationInput[]
    cursor?: ViewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * Cars.favorites
   */
  export type Cars$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorites
     */
    select?: FavoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorites
     */
    omit?: FavoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritesInclude<ExtArgs> | null
    where?: FavoritesWhereInput
    orderBy?: FavoritesOrderByWithRelationInput | FavoritesOrderByWithRelationInput[]
    cursor?: FavoritesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritesScalarFieldEnum | FavoritesScalarFieldEnum[]
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
   * Model Views
   */

  export type AggregateViews = {
    _count: ViewsCountAggregateOutputType | null
    _avg: ViewsAvgAggregateOutputType | null
    _sum: ViewsSumAggregateOutputType | null
    _min: ViewsMinAggregateOutputType | null
    _max: ViewsMaxAggregateOutputType | null
  }

  export type ViewsAvgAggregateOutputType = {
    id: number | null
    carId: number | null
    userId: number | null
    visitorId: number | null
  }

  export type ViewsSumAggregateOutputType = {
    id: number | null
    carId: number | null
    userId: number | null
    visitorId: number | null
  }

  export type ViewsMinAggregateOutputType = {
    id: number | null
    carId: number | null
    userId: number | null
    visitorId: number | null
  }

  export type ViewsMaxAggregateOutputType = {
    id: number | null
    carId: number | null
    userId: number | null
    visitorId: number | null
  }

  export type ViewsCountAggregateOutputType = {
    id: number
    carId: number
    userId: number
    visitorId: number
    _all: number
  }


  export type ViewsAvgAggregateInputType = {
    id?: true
    carId?: true
    userId?: true
    visitorId?: true
  }

  export type ViewsSumAggregateInputType = {
    id?: true
    carId?: true
    userId?: true
    visitorId?: true
  }

  export type ViewsMinAggregateInputType = {
    id?: true
    carId?: true
    userId?: true
    visitorId?: true
  }

  export type ViewsMaxAggregateInputType = {
    id?: true
    carId?: true
    userId?: true
    visitorId?: true
  }

  export type ViewsCountAggregateInputType = {
    id?: true
    carId?: true
    userId?: true
    visitorId?: true
    _all?: true
  }

  export type ViewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Views to aggregate.
     */
    where?: ViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewsOrderByWithRelationInput | ViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Views
    **/
    _count?: true | ViewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewsMaxAggregateInputType
  }

  export type GetViewsAggregateType<T extends ViewsAggregateArgs> = {
        [P in keyof T & keyof AggregateViews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViews[P]>
      : GetScalarType<T[P], AggregateViews[P]>
  }




  export type ViewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewsWhereInput
    orderBy?: ViewsOrderByWithAggregationInput | ViewsOrderByWithAggregationInput[]
    by: ViewsScalarFieldEnum[] | ViewsScalarFieldEnum
    having?: ViewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewsCountAggregateInputType | true
    _avg?: ViewsAvgAggregateInputType
    _sum?: ViewsSumAggregateInputType
    _min?: ViewsMinAggregateInputType
    _max?: ViewsMaxAggregateInputType
  }

  export type ViewsGroupByOutputType = {
    id: number
    carId: number
    userId: number | null
    visitorId: number | null
    _count: ViewsCountAggregateOutputType | null
    _avg: ViewsAvgAggregateOutputType | null
    _sum: ViewsSumAggregateOutputType | null
    _min: ViewsMinAggregateOutputType | null
    _max: ViewsMaxAggregateOutputType | null
  }

  type GetViewsGroupByPayload<T extends ViewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewsGroupByOutputType[P]>
            : GetScalarType<T[P], ViewsGroupByOutputType[P]>
        }
      >
    >


  export type ViewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    userId?: boolean
    visitorId?: boolean
    car?: boolean | CarsDefaultArgs<ExtArgs>
    user?: boolean | Views$userArgs<ExtArgs>
    visitor?: boolean | Views$visitorArgs<ExtArgs>
  }, ExtArgs["result"]["views"]>

  export type ViewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    userId?: boolean
    visitorId?: boolean
    car?: boolean | CarsDefaultArgs<ExtArgs>
    user?: boolean | Views$userArgs<ExtArgs>
    visitor?: boolean | Views$visitorArgs<ExtArgs>
  }, ExtArgs["result"]["views"]>

  export type ViewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    userId?: boolean
    visitorId?: boolean
    car?: boolean | CarsDefaultArgs<ExtArgs>
    user?: boolean | Views$userArgs<ExtArgs>
    visitor?: boolean | Views$visitorArgs<ExtArgs>
  }, ExtArgs["result"]["views"]>

  export type ViewsSelectScalar = {
    id?: boolean
    carId?: boolean
    userId?: boolean
    visitorId?: boolean
  }

  export type ViewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carId" | "userId" | "visitorId", ExtArgs["result"]["views"]>
  export type ViewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarsDefaultArgs<ExtArgs>
    user?: boolean | Views$userArgs<ExtArgs>
    visitor?: boolean | Views$visitorArgs<ExtArgs>
  }
  export type ViewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarsDefaultArgs<ExtArgs>
    user?: boolean | Views$userArgs<ExtArgs>
    visitor?: boolean | Views$visitorArgs<ExtArgs>
  }
  export type ViewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarsDefaultArgs<ExtArgs>
    user?: boolean | Views$userArgs<ExtArgs>
    visitor?: boolean | Views$visitorArgs<ExtArgs>
  }

  export type $ViewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Views"
    objects: {
      car: Prisma.$CarsPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      visitor: Prisma.$VisitorsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      carId: number
      userId: number | null
      visitorId: number | null
    }, ExtArgs["result"]["views"]>
    composites: {}
  }

  type ViewsGetPayload<S extends boolean | null | undefined | ViewsDefaultArgs> = $Result.GetResult<Prisma.$ViewsPayload, S>

  type ViewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViewsCountAggregateInputType | true
    }

  export interface ViewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Views'], meta: { name: 'Views' } }
    /**
     * Find zero or one Views that matches the filter.
     * @param {ViewsFindUniqueArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViewsFindUniqueArgs>(args: SelectSubset<T, ViewsFindUniqueArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Views that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViewsFindUniqueOrThrowArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViewsFindUniqueOrThrowArgs>(args: SelectSubset<T, ViewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsFindFirstArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViewsFindFirstArgs>(args?: SelectSubset<T, ViewsFindFirstArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Views that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsFindFirstOrThrowArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViewsFindFirstOrThrowArgs>(args?: SelectSubset<T, ViewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Views
     * const views = await prisma.views.findMany()
     * 
     * // Get first 10 Views
     * const views = await prisma.views.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewsWithIdOnly = await prisma.views.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViewsFindManyArgs>(args?: SelectSubset<T, ViewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Views.
     * @param {ViewsCreateArgs} args - Arguments to create a Views.
     * @example
     * // Create one Views
     * const Views = await prisma.views.create({
     *   data: {
     *     // ... data to create a Views
     *   }
     * })
     * 
     */
    create<T extends ViewsCreateArgs>(args: SelectSubset<T, ViewsCreateArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Views.
     * @param {ViewsCreateManyArgs} args - Arguments to create many Views.
     * @example
     * // Create many Views
     * const views = await prisma.views.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViewsCreateManyArgs>(args?: SelectSubset<T, ViewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Views and returns the data saved in the database.
     * @param {ViewsCreateManyAndReturnArgs} args - Arguments to create many Views.
     * @example
     * // Create many Views
     * const views = await prisma.views.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Views and only return the `id`
     * const viewsWithIdOnly = await prisma.views.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViewsCreateManyAndReturnArgs>(args?: SelectSubset<T, ViewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Views.
     * @param {ViewsDeleteArgs} args - Arguments to delete one Views.
     * @example
     * // Delete one Views
     * const Views = await prisma.views.delete({
     *   where: {
     *     // ... filter to delete one Views
     *   }
     * })
     * 
     */
    delete<T extends ViewsDeleteArgs>(args: SelectSubset<T, ViewsDeleteArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Views.
     * @param {ViewsUpdateArgs} args - Arguments to update one Views.
     * @example
     * // Update one Views
     * const views = await prisma.views.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViewsUpdateArgs>(args: SelectSubset<T, ViewsUpdateArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Views.
     * @param {ViewsDeleteManyArgs} args - Arguments to filter Views to delete.
     * @example
     * // Delete a few Views
     * const { count } = await prisma.views.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViewsDeleteManyArgs>(args?: SelectSubset<T, ViewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Views
     * const views = await prisma.views.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViewsUpdateManyArgs>(args: SelectSubset<T, ViewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Views and returns the data updated in the database.
     * @param {ViewsUpdateManyAndReturnArgs} args - Arguments to update many Views.
     * @example
     * // Update many Views
     * const views = await prisma.views.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Views and only return the `id`
     * const viewsWithIdOnly = await prisma.views.updateManyAndReturn({
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
    updateManyAndReturn<T extends ViewsUpdateManyAndReturnArgs>(args: SelectSubset<T, ViewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Views.
     * @param {ViewsUpsertArgs} args - Arguments to update or create a Views.
     * @example
     * // Update or create a Views
     * const views = await prisma.views.upsert({
     *   create: {
     *     // ... data to create a Views
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Views we want to update
     *   }
     * })
     */
    upsert<T extends ViewsUpsertArgs>(args: SelectSubset<T, ViewsUpsertArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsCountArgs} args - Arguments to filter Views to count.
     * @example
     * // Count the number of Views
     * const count = await prisma.views.count({
     *   where: {
     *     // ... the filter for the Views we want to count
     *   }
     * })
    **/
    count<T extends ViewsCountArgs>(
      args?: Subset<T, ViewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ViewsAggregateArgs>(args: Subset<T, ViewsAggregateArgs>): Prisma.PrismaPromise<GetViewsAggregateType<T>>

    /**
     * Group by Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsGroupByArgs} args - Group by arguments.
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
      T extends ViewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewsGroupByArgs['orderBy'] }
        : { orderBy?: ViewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ViewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Views model
   */
  readonly fields: ViewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Views.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends CarsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarsDefaultArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Views$userArgs<ExtArgs> = {}>(args?: Subset<T, Views$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    visitor<T extends Views$visitorArgs<ExtArgs> = {}>(args?: Subset<T, Views$visitorArgs<ExtArgs>>): Prisma__VisitorsClient<$Result.GetResult<Prisma.$VisitorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Views model
   */
  interface ViewsFieldRefs {
    readonly id: FieldRef<"Views", 'Int'>
    readonly carId: FieldRef<"Views", 'Int'>
    readonly userId: FieldRef<"Views", 'Int'>
    readonly visitorId: FieldRef<"Views", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Views findUnique
   */
  export type ViewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where: ViewsWhereUniqueInput
  }

  /**
   * Views findUniqueOrThrow
   */
  export type ViewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where: ViewsWhereUniqueInput
  }

  /**
   * Views findFirst
   */
  export type ViewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where?: ViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewsOrderByWithRelationInput | ViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Views.
     */
    cursor?: ViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Views.
     */
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * Views findFirstOrThrow
   */
  export type ViewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where?: ViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewsOrderByWithRelationInput | ViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Views.
     */
    cursor?: ViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Views.
     */
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * Views findMany
   */
  export type ViewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where?: ViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewsOrderByWithRelationInput | ViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Views.
     */
    cursor?: ViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * Views create
   */
  export type ViewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * The data needed to create a Views.
     */
    data: XOR<ViewsCreateInput, ViewsUncheckedCreateInput>
  }

  /**
   * Views createMany
   */
  export type ViewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Views.
     */
    data: ViewsCreateManyInput | ViewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Views createManyAndReturn
   */
  export type ViewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * The data used to create many Views.
     */
    data: ViewsCreateManyInput | ViewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Views update
   */
  export type ViewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * The data needed to update a Views.
     */
    data: XOR<ViewsUpdateInput, ViewsUncheckedUpdateInput>
    /**
     * Choose, which Views to update.
     */
    where: ViewsWhereUniqueInput
  }

  /**
   * Views updateMany
   */
  export type ViewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Views.
     */
    data: XOR<ViewsUpdateManyMutationInput, ViewsUncheckedUpdateManyInput>
    /**
     * Filter which Views to update
     */
    where?: ViewsWhereInput
    /**
     * Limit how many Views to update.
     */
    limit?: number
  }

  /**
   * Views updateManyAndReturn
   */
  export type ViewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * The data used to update Views.
     */
    data: XOR<ViewsUpdateManyMutationInput, ViewsUncheckedUpdateManyInput>
    /**
     * Filter which Views to update
     */
    where?: ViewsWhereInput
    /**
     * Limit how many Views to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Views upsert
   */
  export type ViewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * The filter to search for the Views to update in case it exists.
     */
    where: ViewsWhereUniqueInput
    /**
     * In case the Views found by the `where` argument doesn't exist, create a new Views with this data.
     */
    create: XOR<ViewsCreateInput, ViewsUncheckedCreateInput>
    /**
     * In case the Views was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewsUpdateInput, ViewsUncheckedUpdateInput>
  }

  /**
   * Views delete
   */
  export type ViewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter which Views to delete.
     */
    where: ViewsWhereUniqueInput
  }

  /**
   * Views deleteMany
   */
  export type ViewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Views to delete
     */
    where?: ViewsWhereInput
    /**
     * Limit how many Views to delete.
     */
    limit?: number
  }

  /**
   * Views.user
   */
  export type Views$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Views.visitor
   */
  export type Views$visitorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitors
     */
    select?: VisitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitors
     */
    omit?: VisitorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorsInclude<ExtArgs> | null
    where?: VisitorsWhereInput
  }

  /**
   * Views without action
   */
  export type ViewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
  }


  /**
   * Model Visitors
   */

  export type AggregateVisitors = {
    _count: VisitorsCountAggregateOutputType | null
    _avg: VisitorsAvgAggregateOutputType | null
    _sum: VisitorsSumAggregateOutputType | null
    _min: VisitorsMinAggregateOutputType | null
    _max: VisitorsMaxAggregateOutputType | null
  }

  export type VisitorsAvgAggregateOutputType = {
    id: number | null
  }

  export type VisitorsSumAggregateOutputType = {
    id: number | null
  }

  export type VisitorsMinAggregateOutputType = {
    id: number | null
  }

  export type VisitorsMaxAggregateOutputType = {
    id: number | null
  }

  export type VisitorsCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type VisitorsAvgAggregateInputType = {
    id?: true
  }

  export type VisitorsSumAggregateInputType = {
    id?: true
  }

  export type VisitorsMinAggregateInputType = {
    id?: true
  }

  export type VisitorsMaxAggregateInputType = {
    id?: true
  }

  export type VisitorsCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type VisitorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visitors to aggregate.
     */
    where?: VisitorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorsOrderByWithRelationInput | VisitorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Visitors
    **/
    _count?: true | VisitorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisitorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisitorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitorsMaxAggregateInputType
  }

  export type GetVisitorsAggregateType<T extends VisitorsAggregateArgs> = {
        [P in keyof T & keyof AggregateVisitors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisitors[P]>
      : GetScalarType<T[P], AggregateVisitors[P]>
  }




  export type VisitorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitorsWhereInput
    orderBy?: VisitorsOrderByWithAggregationInput | VisitorsOrderByWithAggregationInput[]
    by: VisitorsScalarFieldEnum[] | VisitorsScalarFieldEnum
    having?: VisitorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitorsCountAggregateInputType | true
    _avg?: VisitorsAvgAggregateInputType
    _sum?: VisitorsSumAggregateInputType
    _min?: VisitorsMinAggregateInputType
    _max?: VisitorsMaxAggregateInputType
  }

  export type VisitorsGroupByOutputType = {
    id: number
    _count: VisitorsCountAggregateOutputType | null
    _avg: VisitorsAvgAggregateOutputType | null
    _sum: VisitorsSumAggregateOutputType | null
    _min: VisitorsMinAggregateOutputType | null
    _max: VisitorsMaxAggregateOutputType | null
  }

  type GetVisitorsGroupByPayload<T extends VisitorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitorsGroupByOutputType[P]>
            : GetScalarType<T[P], VisitorsGroupByOutputType[P]>
        }
      >
    >


  export type VisitorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    views?: boolean | Visitors$viewsArgs<ExtArgs>
    _count?: boolean | VisitorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitors"]>

  export type VisitorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["visitors"]>

  export type VisitorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["visitors"]>

  export type VisitorsSelectScalar = {
    id?: boolean
  }

  export type VisitorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["visitors"]>
  export type VisitorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    views?: boolean | Visitors$viewsArgs<ExtArgs>
    _count?: boolean | VisitorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VisitorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VisitorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VisitorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Visitors"
    objects: {
      views: Prisma.$ViewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
    }, ExtArgs["result"]["visitors"]>
    composites: {}
  }

  type VisitorsGetPayload<S extends boolean | null | undefined | VisitorsDefaultArgs> = $Result.GetResult<Prisma.$VisitorsPayload, S>

  type VisitorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisitorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisitorsCountAggregateInputType | true
    }

  export interface VisitorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Visitors'], meta: { name: 'Visitors' } }
    /**
     * Find zero or one Visitors that matches the filter.
     * @param {VisitorsFindUniqueArgs} args - Arguments to find a Visitors
     * @example
     * // Get one Visitors
     * const visitors = await prisma.visitors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisitorsFindUniqueArgs>(args: SelectSubset<T, VisitorsFindUniqueArgs<ExtArgs>>): Prisma__VisitorsClient<$Result.GetResult<Prisma.$VisitorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Visitors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisitorsFindUniqueOrThrowArgs} args - Arguments to find a Visitors
     * @example
     * // Get one Visitors
     * const visitors = await prisma.visitors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisitorsFindUniqueOrThrowArgs>(args: SelectSubset<T, VisitorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisitorsClient<$Result.GetResult<Prisma.$VisitorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorsFindFirstArgs} args - Arguments to find a Visitors
     * @example
     * // Get one Visitors
     * const visitors = await prisma.visitors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisitorsFindFirstArgs>(args?: SelectSubset<T, VisitorsFindFirstArgs<ExtArgs>>): Prisma__VisitorsClient<$Result.GetResult<Prisma.$VisitorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visitors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorsFindFirstOrThrowArgs} args - Arguments to find a Visitors
     * @example
     * // Get one Visitors
     * const visitors = await prisma.visitors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisitorsFindFirstOrThrowArgs>(args?: SelectSubset<T, VisitorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisitorsClient<$Result.GetResult<Prisma.$VisitorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Visitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visitors
     * const visitors = await prisma.visitors.findMany()
     * 
     * // Get first 10 Visitors
     * const visitors = await prisma.visitors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitorsWithIdOnly = await prisma.visitors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisitorsFindManyArgs>(args?: SelectSubset<T, VisitorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Visitors.
     * @param {VisitorsCreateArgs} args - Arguments to create a Visitors.
     * @example
     * // Create one Visitors
     * const Visitors = await prisma.visitors.create({
     *   data: {
     *     // ... data to create a Visitors
     *   }
     * })
     * 
     */
    create<T extends VisitorsCreateArgs>(args: SelectSubset<T, VisitorsCreateArgs<ExtArgs>>): Prisma__VisitorsClient<$Result.GetResult<Prisma.$VisitorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Visitors.
     * @param {VisitorsCreateManyArgs} args - Arguments to create many Visitors.
     * @example
     * // Create many Visitors
     * const visitors = await prisma.visitors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisitorsCreateManyArgs>(args?: SelectSubset<T, VisitorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Visitors and returns the data saved in the database.
     * @param {VisitorsCreateManyAndReturnArgs} args - Arguments to create many Visitors.
     * @example
     * // Create many Visitors
     * const visitors = await prisma.visitors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Visitors and only return the `id`
     * const visitorsWithIdOnly = await prisma.visitors.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisitorsCreateManyAndReturnArgs>(args?: SelectSubset<T, VisitorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Visitors.
     * @param {VisitorsDeleteArgs} args - Arguments to delete one Visitors.
     * @example
     * // Delete one Visitors
     * const Visitors = await prisma.visitors.delete({
     *   where: {
     *     // ... filter to delete one Visitors
     *   }
     * })
     * 
     */
    delete<T extends VisitorsDeleteArgs>(args: SelectSubset<T, VisitorsDeleteArgs<ExtArgs>>): Prisma__VisitorsClient<$Result.GetResult<Prisma.$VisitorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Visitors.
     * @param {VisitorsUpdateArgs} args - Arguments to update one Visitors.
     * @example
     * // Update one Visitors
     * const visitors = await prisma.visitors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisitorsUpdateArgs>(args: SelectSubset<T, VisitorsUpdateArgs<ExtArgs>>): Prisma__VisitorsClient<$Result.GetResult<Prisma.$VisitorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Visitors.
     * @param {VisitorsDeleteManyArgs} args - Arguments to filter Visitors to delete.
     * @example
     * // Delete a few Visitors
     * const { count } = await prisma.visitors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisitorsDeleteManyArgs>(args?: SelectSubset<T, VisitorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visitors
     * const visitors = await prisma.visitors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisitorsUpdateManyArgs>(args: SelectSubset<T, VisitorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visitors and returns the data updated in the database.
     * @param {VisitorsUpdateManyAndReturnArgs} args - Arguments to update many Visitors.
     * @example
     * // Update many Visitors
     * const visitors = await prisma.visitors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Visitors and only return the `id`
     * const visitorsWithIdOnly = await prisma.visitors.updateManyAndReturn({
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
    updateManyAndReturn<T extends VisitorsUpdateManyAndReturnArgs>(args: SelectSubset<T, VisitorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Visitors.
     * @param {VisitorsUpsertArgs} args - Arguments to update or create a Visitors.
     * @example
     * // Update or create a Visitors
     * const visitors = await prisma.visitors.upsert({
     *   create: {
     *     // ... data to create a Visitors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visitors we want to update
     *   }
     * })
     */
    upsert<T extends VisitorsUpsertArgs>(args: SelectSubset<T, VisitorsUpsertArgs<ExtArgs>>): Prisma__VisitorsClient<$Result.GetResult<Prisma.$VisitorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorsCountArgs} args - Arguments to filter Visitors to count.
     * @example
     * // Count the number of Visitors
     * const count = await prisma.visitors.count({
     *   where: {
     *     // ... the filter for the Visitors we want to count
     *   }
     * })
    **/
    count<T extends VisitorsCountArgs>(
      args?: Subset<T, VisitorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisitorsAggregateArgs>(args: Subset<T, VisitorsAggregateArgs>): Prisma.PrismaPromise<GetVisitorsAggregateType<T>>

    /**
     * Group by Visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorsGroupByArgs} args - Group by arguments.
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
      T extends VisitorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitorsGroupByArgs['orderBy'] }
        : { orderBy?: VisitorsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisitorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Visitors model
   */
  readonly fields: VisitorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Visitors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    views<T extends Visitors$viewsArgs<ExtArgs> = {}>(args?: Subset<T, Visitors$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Visitors model
   */
  interface VisitorsFieldRefs {
    readonly id: FieldRef<"Visitors", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Visitors findUnique
   */
  export type VisitorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitors
     */
    select?: VisitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitors
     */
    omit?: VisitorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorsInclude<ExtArgs> | null
    /**
     * Filter, which Visitors to fetch.
     */
    where: VisitorsWhereUniqueInput
  }

  /**
   * Visitors findUniqueOrThrow
   */
  export type VisitorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitors
     */
    select?: VisitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitors
     */
    omit?: VisitorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorsInclude<ExtArgs> | null
    /**
     * Filter, which Visitors to fetch.
     */
    where: VisitorsWhereUniqueInput
  }

  /**
   * Visitors findFirst
   */
  export type VisitorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitors
     */
    select?: VisitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitors
     */
    omit?: VisitorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorsInclude<ExtArgs> | null
    /**
     * Filter, which Visitors to fetch.
     */
    where?: VisitorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorsOrderByWithRelationInput | VisitorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visitors.
     */
    cursor?: VisitorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitors.
     */
    distinct?: VisitorsScalarFieldEnum | VisitorsScalarFieldEnum[]
  }

  /**
   * Visitors findFirstOrThrow
   */
  export type VisitorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitors
     */
    select?: VisitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitors
     */
    omit?: VisitorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorsInclude<ExtArgs> | null
    /**
     * Filter, which Visitors to fetch.
     */
    where?: VisitorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorsOrderByWithRelationInput | VisitorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visitors.
     */
    cursor?: VisitorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitors.
     */
    distinct?: VisitorsScalarFieldEnum | VisitorsScalarFieldEnum[]
  }

  /**
   * Visitors findMany
   */
  export type VisitorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitors
     */
    select?: VisitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitors
     */
    omit?: VisitorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorsInclude<ExtArgs> | null
    /**
     * Filter, which Visitors to fetch.
     */
    where?: VisitorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorsOrderByWithRelationInput | VisitorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Visitors.
     */
    cursor?: VisitorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    distinct?: VisitorsScalarFieldEnum | VisitorsScalarFieldEnum[]
  }

  /**
   * Visitors create
   */
  export type VisitorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitors
     */
    select?: VisitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitors
     */
    omit?: VisitorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorsInclude<ExtArgs> | null
    /**
     * The data needed to create a Visitors.
     */
    data?: XOR<VisitorsCreateInput, VisitorsUncheckedCreateInput>
  }

  /**
   * Visitors createMany
   */
  export type VisitorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Visitors.
     */
    data: VisitorsCreateManyInput | VisitorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Visitors createManyAndReturn
   */
  export type VisitorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitors
     */
    select?: VisitorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visitors
     */
    omit?: VisitorsOmit<ExtArgs> | null
    /**
     * The data used to create many Visitors.
     */
    data: VisitorsCreateManyInput | VisitorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Visitors update
   */
  export type VisitorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitors
     */
    select?: VisitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitors
     */
    omit?: VisitorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorsInclude<ExtArgs> | null
    /**
     * The data needed to update a Visitors.
     */
    data: XOR<VisitorsUpdateInput, VisitorsUncheckedUpdateInput>
    /**
     * Choose, which Visitors to update.
     */
    where: VisitorsWhereUniqueInput
  }

  /**
   * Visitors updateMany
   */
  export type VisitorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Visitors.
     */
    data: XOR<VisitorsUpdateManyMutationInput, VisitorsUncheckedUpdateManyInput>
    /**
     * Filter which Visitors to update
     */
    where?: VisitorsWhereInput
    /**
     * Limit how many Visitors to update.
     */
    limit?: number
  }

  /**
   * Visitors updateManyAndReturn
   */
  export type VisitorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitors
     */
    select?: VisitorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visitors
     */
    omit?: VisitorsOmit<ExtArgs> | null
    /**
     * The data used to update Visitors.
     */
    data: XOR<VisitorsUpdateManyMutationInput, VisitorsUncheckedUpdateManyInput>
    /**
     * Filter which Visitors to update
     */
    where?: VisitorsWhereInput
    /**
     * Limit how many Visitors to update.
     */
    limit?: number
  }

  /**
   * Visitors upsert
   */
  export type VisitorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitors
     */
    select?: VisitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitors
     */
    omit?: VisitorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorsInclude<ExtArgs> | null
    /**
     * The filter to search for the Visitors to update in case it exists.
     */
    where: VisitorsWhereUniqueInput
    /**
     * In case the Visitors found by the `where` argument doesn't exist, create a new Visitors with this data.
     */
    create: XOR<VisitorsCreateInput, VisitorsUncheckedCreateInput>
    /**
     * In case the Visitors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitorsUpdateInput, VisitorsUncheckedUpdateInput>
  }

  /**
   * Visitors delete
   */
  export type VisitorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitors
     */
    select?: VisitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitors
     */
    omit?: VisitorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorsInclude<ExtArgs> | null
    /**
     * Filter which Visitors to delete.
     */
    where: VisitorsWhereUniqueInput
  }

  /**
   * Visitors deleteMany
   */
  export type VisitorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visitors to delete
     */
    where?: VisitorsWhereInput
    /**
     * Limit how many Visitors to delete.
     */
    limit?: number
  }

  /**
   * Visitors.views
   */
  export type Visitors$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    where?: ViewsWhereInput
    orderBy?: ViewsOrderByWithRelationInput | ViewsOrderByWithRelationInput[]
    cursor?: ViewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * Visitors without action
   */
  export type VisitorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitors
     */
    select?: VisitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitors
     */
    omit?: VisitorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorsInclude<ExtArgs> | null
  }


  /**
   * Model Favorites
   */

  export type AggregateFavorites = {
    _count: FavoritesCountAggregateOutputType | null
    _avg: FavoritesAvgAggregateOutputType | null
    _sum: FavoritesSumAggregateOutputType | null
    _min: FavoritesMinAggregateOutputType | null
    _max: FavoritesMaxAggregateOutputType | null
  }

  export type FavoritesAvgAggregateOutputType = {
    id: number | null
    carId: number | null
    userId: number | null
  }

  export type FavoritesSumAggregateOutputType = {
    id: number | null
    carId: number | null
    userId: number | null
  }

  export type FavoritesMinAggregateOutputType = {
    id: number | null
    carId: number | null
    userId: number | null
  }

  export type FavoritesMaxAggregateOutputType = {
    id: number | null
    carId: number | null
    userId: number | null
  }

  export type FavoritesCountAggregateOutputType = {
    id: number
    carId: number
    userId: number
    _all: number
  }


  export type FavoritesAvgAggregateInputType = {
    id?: true
    carId?: true
    userId?: true
  }

  export type FavoritesSumAggregateInputType = {
    id?: true
    carId?: true
    userId?: true
  }

  export type FavoritesMinAggregateInputType = {
    id?: true
    carId?: true
    userId?: true
  }

  export type FavoritesMaxAggregateInputType = {
    id?: true
    carId?: true
    userId?: true
  }

  export type FavoritesCountAggregateInputType = {
    id?: true
    carId?: true
    userId?: true
    _all?: true
  }

  export type FavoritesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to aggregate.
     */
    where?: FavoritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoritesOrderByWithRelationInput | FavoritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoritesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoritesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoritesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoritesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoritesMaxAggregateInputType
  }

  export type GetFavoritesAggregateType<T extends FavoritesAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorites]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorites[P]>
      : GetScalarType<T[P], AggregateFavorites[P]>
  }




  export type FavoritesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritesWhereInput
    orderBy?: FavoritesOrderByWithAggregationInput | FavoritesOrderByWithAggregationInput[]
    by: FavoritesScalarFieldEnum[] | FavoritesScalarFieldEnum
    having?: FavoritesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoritesCountAggregateInputType | true
    _avg?: FavoritesAvgAggregateInputType
    _sum?: FavoritesSumAggregateInputType
    _min?: FavoritesMinAggregateInputType
    _max?: FavoritesMaxAggregateInputType
  }

  export type FavoritesGroupByOutputType = {
    id: number
    carId: number
    userId: number
    _count: FavoritesCountAggregateOutputType | null
    _avg: FavoritesAvgAggregateOutputType | null
    _sum: FavoritesSumAggregateOutputType | null
    _min: FavoritesMinAggregateOutputType | null
    _max: FavoritesMaxAggregateOutputType | null
  }

  type GetFavoritesGroupByPayload<T extends FavoritesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoritesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoritesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoritesGroupByOutputType[P]>
            : GetScalarType<T[P], FavoritesGroupByOutputType[P]>
        }
      >
    >


  export type FavoritesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    userId?: boolean
    car?: boolean | CarsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorites"]>

  export type FavoritesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    userId?: boolean
    car?: boolean | CarsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorites"]>

  export type FavoritesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    userId?: boolean
    car?: boolean | CarsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorites"]>

  export type FavoritesSelectScalar = {
    id?: boolean
    carId?: boolean
    userId?: boolean
  }

  export type FavoritesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carId" | "userId", ExtArgs["result"]["favorites"]>
  export type FavoritesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FavoritesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FavoritesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FavoritesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorites"
    objects: {
      car: Prisma.$CarsPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      carId: number
      userId: number
    }, ExtArgs["result"]["favorites"]>
    composites: {}
  }

  type FavoritesGetPayload<S extends boolean | null | undefined | FavoritesDefaultArgs> = $Result.GetResult<Prisma.$FavoritesPayload, S>

  type FavoritesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoritesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoritesCountAggregateInputType | true
    }

  export interface FavoritesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorites'], meta: { name: 'Favorites' } }
    /**
     * Find zero or one Favorites that matches the filter.
     * @param {FavoritesFindUniqueArgs} args - Arguments to find a Favorites
     * @example
     * // Get one Favorites
     * const favorites = await prisma.favorites.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoritesFindUniqueArgs>(args: SelectSubset<T, FavoritesFindUniqueArgs<ExtArgs>>): Prisma__FavoritesClient<$Result.GetResult<Prisma.$FavoritesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorites that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoritesFindUniqueOrThrowArgs} args - Arguments to find a Favorites
     * @example
     * // Get one Favorites
     * const favorites = await prisma.favorites.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoritesFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoritesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoritesClient<$Result.GetResult<Prisma.$FavoritesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritesFindFirstArgs} args - Arguments to find a Favorites
     * @example
     * // Get one Favorites
     * const favorites = await prisma.favorites.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoritesFindFirstArgs>(args?: SelectSubset<T, FavoritesFindFirstArgs<ExtArgs>>): Prisma__FavoritesClient<$Result.GetResult<Prisma.$FavoritesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorites that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritesFindFirstOrThrowArgs} args - Arguments to find a Favorites
     * @example
     * // Get one Favorites
     * const favorites = await prisma.favorites.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoritesFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoritesFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoritesClient<$Result.GetResult<Prisma.$FavoritesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorites.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorites.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoritesWithIdOnly = await prisma.favorites.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoritesFindManyArgs>(args?: SelectSubset<T, FavoritesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorites.
     * @param {FavoritesCreateArgs} args - Arguments to create a Favorites.
     * @example
     * // Create one Favorites
     * const Favorites = await prisma.favorites.create({
     *   data: {
     *     // ... data to create a Favorites
     *   }
     * })
     * 
     */
    create<T extends FavoritesCreateArgs>(args: SelectSubset<T, FavoritesCreateArgs<ExtArgs>>): Prisma__FavoritesClient<$Result.GetResult<Prisma.$FavoritesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favorites.
     * @param {FavoritesCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorites = await prisma.favorites.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoritesCreateManyArgs>(args?: SelectSubset<T, FavoritesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {FavoritesCreateManyAndReturnArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorites = await prisma.favorites.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorites and only return the `id`
     * const favoritesWithIdOnly = await prisma.favorites.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoritesCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoritesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorites.
     * @param {FavoritesDeleteArgs} args - Arguments to delete one Favorites.
     * @example
     * // Delete one Favorites
     * const Favorites = await prisma.favorites.delete({
     *   where: {
     *     // ... filter to delete one Favorites
     *   }
     * })
     * 
     */
    delete<T extends FavoritesDeleteArgs>(args: SelectSubset<T, FavoritesDeleteArgs<ExtArgs>>): Prisma__FavoritesClient<$Result.GetResult<Prisma.$FavoritesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorites.
     * @param {FavoritesUpdateArgs} args - Arguments to update one Favorites.
     * @example
     * // Update one Favorites
     * const favorites = await prisma.favorites.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoritesUpdateArgs>(args: SelectSubset<T, FavoritesUpdateArgs<ExtArgs>>): Prisma__FavoritesClient<$Result.GetResult<Prisma.$FavoritesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favorites.
     * @param {FavoritesDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorites.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoritesDeleteManyArgs>(args?: SelectSubset<T, FavoritesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorites = await prisma.favorites.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoritesUpdateManyArgs>(args: SelectSubset<T, FavoritesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites and returns the data updated in the database.
     * @param {FavoritesUpdateManyAndReturnArgs} args - Arguments to update many Favorites.
     * @example
     * // Update many Favorites
     * const favorites = await prisma.favorites.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favorites and only return the `id`
     * const favoritesWithIdOnly = await prisma.favorites.updateManyAndReturn({
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
    updateManyAndReturn<T extends FavoritesUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoritesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorites.
     * @param {FavoritesUpsertArgs} args - Arguments to update or create a Favorites.
     * @example
     * // Update or create a Favorites
     * const favorites = await prisma.favorites.upsert({
     *   create: {
     *     // ... data to create a Favorites
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorites we want to update
     *   }
     * })
     */
    upsert<T extends FavoritesUpsertArgs>(args: SelectSubset<T, FavoritesUpsertArgs<ExtArgs>>): Prisma__FavoritesClient<$Result.GetResult<Prisma.$FavoritesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritesCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorites.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoritesCountArgs>(
      args?: Subset<T, FavoritesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoritesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoritesAggregateArgs>(args: Subset<T, FavoritesAggregateArgs>): Prisma.PrismaPromise<GetFavoritesAggregateType<T>>

    /**
     * Group by Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritesGroupByArgs} args - Group by arguments.
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
      T extends FavoritesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoritesGroupByArgs['orderBy'] }
        : { orderBy?: FavoritesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavoritesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoritesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorites model
   */
  readonly fields: FavoritesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorites.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoritesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends CarsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarsDefaultArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Favorites model
   */
  interface FavoritesFieldRefs {
    readonly id: FieldRef<"Favorites", 'Int'>
    readonly carId: FieldRef<"Favorites", 'Int'>
    readonly userId: FieldRef<"Favorites", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Favorites findUnique
   */
  export type FavoritesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorites
     */
    select?: FavoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorites
     */
    omit?: FavoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritesInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where: FavoritesWhereUniqueInput
  }

  /**
   * Favorites findUniqueOrThrow
   */
  export type FavoritesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorites
     */
    select?: FavoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorites
     */
    omit?: FavoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritesInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where: FavoritesWhereUniqueInput
  }

  /**
   * Favorites findFirst
   */
  export type FavoritesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorites
     */
    select?: FavoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorites
     */
    omit?: FavoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritesInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoritesOrderByWithRelationInput | FavoritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoritesScalarFieldEnum | FavoritesScalarFieldEnum[]
  }

  /**
   * Favorites findFirstOrThrow
   */
  export type FavoritesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorites
     */
    select?: FavoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorites
     */
    omit?: FavoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritesInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoritesOrderByWithRelationInput | FavoritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoritesScalarFieldEnum | FavoritesScalarFieldEnum[]
  }

  /**
   * Favorites findMany
   */
  export type FavoritesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorites
     */
    select?: FavoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorites
     */
    omit?: FavoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritesInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoritesOrderByWithRelationInput | FavoritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     */
    cursor?: FavoritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    distinct?: FavoritesScalarFieldEnum | FavoritesScalarFieldEnum[]
  }

  /**
   * Favorites create
   */
  export type FavoritesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorites
     */
    select?: FavoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorites
     */
    omit?: FavoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritesInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorites.
     */
    data: XOR<FavoritesCreateInput, FavoritesUncheckedCreateInput>
  }

  /**
   * Favorites createMany
   */
  export type FavoritesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoritesCreateManyInput | FavoritesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorites createManyAndReturn
   */
  export type FavoritesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorites
     */
    select?: FavoritesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorites
     */
    omit?: FavoritesOmit<ExtArgs> | null
    /**
     * The data used to create many Favorites.
     */
    data: FavoritesCreateManyInput | FavoritesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorites update
   */
  export type FavoritesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorites
     */
    select?: FavoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorites
     */
    omit?: FavoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritesInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorites.
     */
    data: XOR<FavoritesUpdateInput, FavoritesUncheckedUpdateInput>
    /**
     * Choose, which Favorites to update.
     */
    where: FavoritesWhereUniqueInput
  }

  /**
   * Favorites updateMany
   */
  export type FavoritesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoritesUpdateManyMutationInput, FavoritesUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoritesWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
  }

  /**
   * Favorites updateManyAndReturn
   */
  export type FavoritesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorites
     */
    select?: FavoritesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorites
     */
    omit?: FavoritesOmit<ExtArgs> | null
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoritesUpdateManyMutationInput, FavoritesUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoritesWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorites upsert
   */
  export type FavoritesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorites
     */
    select?: FavoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorites
     */
    omit?: FavoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritesInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorites to update in case it exists.
     */
    where: FavoritesWhereUniqueInput
    /**
     * In case the Favorites found by the `where` argument doesn't exist, create a new Favorites with this data.
     */
    create: XOR<FavoritesCreateInput, FavoritesUncheckedCreateInput>
    /**
     * In case the Favorites was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoritesUpdateInput, FavoritesUncheckedUpdateInput>
  }

  /**
   * Favorites delete
   */
  export type FavoritesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorites
     */
    select?: FavoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorites
     */
    omit?: FavoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritesInclude<ExtArgs> | null
    /**
     * Filter which Favorites to delete.
     */
    where: FavoritesWhereUniqueInput
  }

  /**
   * Favorites deleteMany
   */
  export type FavoritesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoritesWhereInput
    /**
     * Limit how many Favorites to delete.
     */
    limit?: number
  }

  /**
   * Favorites without action
   */
  export type FavoritesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorites
     */
    select?: FavoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorites
     */
    omit?: FavoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritesInclude<ExtArgs> | null
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
    phone: string | null
    role: $Enums.Role | null
    isEmailConfirmed: boolean | null
    isPhoneConfirmed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    firstname: string | null
    lastname: string | null
    password: string | null
    phone: string | null
    role: $Enums.Role | null
    isEmailConfirmed: boolean | null
    isPhoneConfirmed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    firstname: number
    lastname: number
    password: number
    phone: number
    role: number
    isEmailConfirmed: number
    isPhoneConfirmed: number
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
    phone?: true
    role?: true
    isEmailConfirmed?: true
    isPhoneConfirmed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    firstname?: true
    lastname?: true
    password?: true
    phone?: true
    role?: true
    isEmailConfirmed?: true
    isPhoneConfirmed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    firstname?: true
    lastname?: true
    password?: true
    phone?: true
    role?: true
    isEmailConfirmed?: true
    isPhoneConfirmed?: true
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
    phone: string | null
    role: $Enums.Role
    isEmailConfirmed: boolean
    isPhoneConfirmed: boolean
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
    phone?: boolean
    role?: boolean
    isEmailConfirmed?: boolean
    isPhoneConfirmed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cars?: boolean | User$carsArgs<ExtArgs>
    entity?: boolean | User$entityArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    reviewed?: boolean | User$reviewedArgs<ExtArgs>
    views?: boolean | User$viewsArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    isEmailConfirmed?: boolean
    isPhoneConfirmed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    isEmailConfirmed?: boolean
    isPhoneConfirmed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    isEmailConfirmed?: boolean
    isPhoneConfirmed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "firstname" | "lastname" | "password" | "phone" | "role" | "isEmailConfirmed" | "isPhoneConfirmed" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | User$carsArgs<ExtArgs>
    entity?: boolean | User$entityArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    reviewed?: boolean | User$reviewedArgs<ExtArgs>
    views?: boolean | User$viewsArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      cars: Prisma.$CarsPayload<ExtArgs>[]
      entity: Prisma.$EntityPayload<ExtArgs>[]
      reviews: Prisma.$ReviewsPayload<ExtArgs>[]
      reviewed: Prisma.$ReviewsPayload<ExtArgs>[]
      views: Prisma.$ViewsPayload<ExtArgs>[]
      favorites: Prisma.$FavoritesPayload<ExtArgs>[]
      sentMessages: Prisma.$MessagePayload<ExtArgs>[]
      receivedMessages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      firstname: string
      lastname: string
      password: string
      phone: string | null
      role: $Enums.Role
      isEmailConfirmed: boolean
      isPhoneConfirmed: boolean
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
    entity<T extends User$entityArgs<ExtArgs> = {}>(args?: Subset<T, User$entityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewed<T extends User$reviewedArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    views<T extends User$viewsArgs<ExtArgs> = {}>(args?: Subset<T, User$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends User$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedMessages<T extends User$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isEmailConfirmed: FieldRef<"User", 'Boolean'>
    readonly isPhoneConfirmed: FieldRef<"User", 'Boolean'>
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
   * User.entity
   */
  export type User$entityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    where?: EntityWhereInput
    orderBy?: EntityOrderByWithRelationInput | EntityOrderByWithRelationInput[]
    cursor?: EntityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntityScalarFieldEnum | EntityScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * User.reviewed
   */
  export type User$reviewedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * User.views
   */
  export type User$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    where?: ViewsWhereInput
    orderBy?: ViewsOrderByWithRelationInput | ViewsOrderByWithRelationInput[]
    cursor?: ViewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * User.favorites
   */
  export type User$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorites
     */
    select?: FavoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorites
     */
    omit?: FavoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritesInclude<ExtArgs> | null
    where?: FavoritesWhereInput
    orderBy?: FavoritesOrderByWithRelationInput | FavoritesOrderByWithRelationInput[]
    cursor?: FavoritesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritesScalarFieldEnum | FavoritesScalarFieldEnum[]
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.receivedMessages
   */
  export type User$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
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
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    fromUserId: number | null
    toUserId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    fromUserId: number | null
    toUserId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    fromUserId: number | null
    toUserId: number | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    fromUserId: number | null
    toUserId: number | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    fromUserId: number
    toUserId: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    fromUserId: number
    toUserId: number
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    fromUserId?: boolean
    toUserId?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fromUserId" | "toUserId", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      fromUser: Prisma.$UserPayload<ExtArgs>
      toUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fromUserId: number
      toUserId: number
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly fromUserId: FieldRef<"Message", 'Int'>
    readonly toUserId: FieldRef<"Message", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
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
    userId: number | null
  }

  export type EntitySumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type EntityMinAggregateOutputType = {
    id: number | null
    registrationNumber: string | null
    name: string | null
    userId: number | null
  }

  export type EntityMaxAggregateOutputType = {
    id: number | null
    registrationNumber: string | null
    name: string | null
    userId: number | null
  }

  export type EntityCountAggregateOutputType = {
    id: number
    registrationNumber: number
    name: number
    userId: number
    _all: number
  }


  export type EntityAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type EntitySumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type EntityMinAggregateInputType = {
    id?: true
    registrationNumber?: true
    name?: true
    userId?: true
  }

  export type EntityMaxAggregateInputType = {
    id?: true
    registrationNumber?: true
    name?: true
    userId?: true
  }

  export type EntityCountAggregateInputType = {
    id?: true
    registrationNumber?: true
    name?: true
    userId?: true
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
    registrationNumber: string
    name: string
    userId: number
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
    registrationNumber?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | Entity$reviewsArgs<ExtArgs>
    _count?: boolean | EntityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entity"]>

  export type EntitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrationNumber?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entity"]>

  export type EntitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrationNumber?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entity"]>

  export type EntitySelectScalar = {
    id?: boolean
    registrationNumber?: boolean
    name?: boolean
    userId?: boolean
  }

  export type EntityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "registrationNumber" | "name" | "userId", ExtArgs["result"]["entity"]>
  export type EntityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | Entity$reviewsArgs<ExtArgs>
    _count?: boolean | EntityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EntityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EntityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EntityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entity"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      reviews: Prisma.$ReviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      registrationNumber: string
      name: string
      userId: number
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
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviews<T extends Entity$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Entity$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly registrationNumber: FieldRef<"Entity", 'String'>
    readonly name: FieldRef<"Entity", 'String'>
    readonly userId: FieldRef<"Entity", 'Int'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
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
   * Entity.reviews
   */
  export type Entity$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
  }


  /**
   * Model Reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    entityId: number | null
    authorId: number | null
    rate: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    entityId: number | null
    authorId: number | null
    rate: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    entityId: number | null
    authorId: number | null
    rate: number | null
    text: string | null
  }

  export type ReviewsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    entityId: number | null
    authorId: number | null
    rate: number | null
    text: string | null
  }

  export type ReviewsCountAggregateOutputType = {
    id: number
    userId: number
    entityId: number
    authorId: number
    rate: number
    text: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    id?: true
    userId?: true
    entityId?: true
    authorId?: true
    rate?: true
  }

  export type ReviewsSumAggregateInputType = {
    id?: true
    userId?: true
    entityId?: true
    authorId?: true
    rate?: true
  }

  export type ReviewsMinAggregateInputType = {
    id?: true
    userId?: true
    entityId?: true
    authorId?: true
    rate?: true
    text?: true
  }

  export type ReviewsMaxAggregateInputType = {
    id?: true
    userId?: true
    entityId?: true
    authorId?: true
    rate?: true
    text?: true
  }

  export type ReviewsCountAggregateInputType = {
    id?: true
    userId?: true
    entityId?: true
    authorId?: true
    rate?: true
    text?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to aggregate.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type ReviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithAggregationInput | ReviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: ReviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    id: number
    userId: number | null
    entityId: number | null
    authorId: number
    rate: number
    text: string
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends ReviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type ReviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    entityId?: boolean
    authorId?: boolean
    rate?: boolean
    text?: boolean
    user?: boolean | Reviews$userArgs<ExtArgs>
    entity?: boolean | Reviews$entityArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    entityId?: boolean
    authorId?: boolean
    rate?: boolean
    text?: boolean
    user?: boolean | Reviews$userArgs<ExtArgs>
    entity?: boolean | Reviews$entityArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    entityId?: boolean
    authorId?: boolean
    rate?: boolean
    text?: boolean
    user?: boolean | Reviews$userArgs<ExtArgs>
    entity?: boolean | Reviews$entityArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectScalar = {
    id?: boolean
    userId?: boolean
    entityId?: boolean
    authorId?: boolean
    rate?: boolean
    text?: boolean
  }

  export type ReviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "entityId" | "authorId" | "rate" | "text", ExtArgs["result"]["reviews"]>
  export type ReviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Reviews$userArgs<ExtArgs>
    entity?: boolean | Reviews$entityArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Reviews$userArgs<ExtArgs>
    entity?: boolean | Reviews$entityArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Reviews$userArgs<ExtArgs>
    entity?: boolean | Reviews$entityArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reviews"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      entity: Prisma.$EntityPayload<ExtArgs> | null
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      entityId: number | null
      authorId: number
      rate: number
      text: string
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }

  type ReviewsGetPayload<S extends boolean | null | undefined | ReviewsDefaultArgs> = $Result.GetResult<Prisma.$ReviewsPayload, S>

  type ReviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface ReviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reviews'], meta: { name: 'Reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {ReviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewsFindUniqueArgs>(args: SelectSubset<T, ReviewsFindUniqueArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewsFindFirstArgs>(args?: SelectSubset<T, ReviewsFindFirstArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewsWithIdOnly = await prisma.reviews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewsFindManyArgs>(args?: SelectSubset<T, ReviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reviews.
     * @param {ReviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
     */
    create<T extends ReviewsCreateArgs>(args: SelectSubset<T, ReviewsCreateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewsCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewsCreateManyArgs>(args?: SelectSubset<T, ReviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewsCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewsCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reviews.
     * @param {ReviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
     */
    delete<T extends ReviewsDeleteArgs>(args: SelectSubset<T, ReviewsDeleteArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reviews.
     * @param {ReviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewsUpdateArgs>(args: SelectSubset<T, ReviewsUpdateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewsDeleteManyArgs>(args?: SelectSubset<T, ReviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewsUpdateManyArgs>(args: SelectSubset<T, ReviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewsUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewsUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reviews.
     * @param {ReviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
     */
    upsert<T extends ReviewsUpsertArgs>(args: SelectSubset<T, ReviewsUpsertArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewsCountArgs>(
      args?: Subset<T, ReviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsGroupByArgs} args - Group by arguments.
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
      T extends ReviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewsGroupByArgs['orderBy'] }
        : { orderBy?: ReviewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reviews model
   */
  readonly fields: ReviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Reviews$userArgs<ExtArgs> = {}>(args?: Subset<T, Reviews$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    entity<T extends Reviews$entityArgs<ExtArgs> = {}>(args?: Subset<T, Reviews$entityArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reviews model
   */
  interface ReviewsFieldRefs {
    readonly id: FieldRef<"Reviews", 'Int'>
    readonly userId: FieldRef<"Reviews", 'Int'>
    readonly entityId: FieldRef<"Reviews", 'Int'>
    readonly authorId: FieldRef<"Reviews", 'Int'>
    readonly rate: FieldRef<"Reviews", 'Int'>
    readonly text: FieldRef<"Reviews", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reviews findUnique
   */
  export type ReviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findUniqueOrThrow
   */
  export type ReviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findFirst
   */
  export type ReviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findFirstOrThrow
   */
  export type ReviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findMany
   */
  export type ReviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews create
   */
  export type ReviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reviews.
     */
    data: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
  }

  /**
   * Reviews createMany
   */
  export type ReviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reviews createManyAndReturn
   */
  export type ReviewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reviews update
   */
  export type ReviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reviews.
     */
    data: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
    /**
     * Choose, which Reviews to update.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews updateMany
   */
  export type ReviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Reviews updateManyAndReturn
   */
  export type ReviewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reviews upsert
   */
  export type ReviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reviews to update in case it exists.
     */
    where: ReviewsWhereUniqueInput
    /**
     * In case the Reviews found by the `where` argument doesn't exist, create a new Reviews with this data.
     */
    create: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
    /**
     * In case the Reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
  }

  /**
   * Reviews delete
   */
  export type ReviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter which Reviews to delete.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews deleteMany
   */
  export type ReviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Reviews.user
   */
  export type Reviews$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Reviews.entity
   */
  export type Reviews$entityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    where?: EntityWhereInput
  }

  /**
   * Reviews without action
   */
  export type ReviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
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
    slug: 'slug',
    countryOfOrigin: 'countryOfOrigin',
    logoUrl: 'logoUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CarMakeScalarFieldEnum = (typeof CarMakeScalarFieldEnum)[keyof typeof CarMakeScalarFieldEnum]


  export const CarModelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
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
    transmissionType: 'transmissionType',
    fuelType: 'fuelType',
    bodyStyle: 'bodyStyle',
    engineVolume: 'engineVolume',
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


  export const ViewsScalarFieldEnum: {
    id: 'id',
    carId: 'carId',
    userId: 'userId',
    visitorId: 'visitorId'
  };

  export type ViewsScalarFieldEnum = (typeof ViewsScalarFieldEnum)[keyof typeof ViewsScalarFieldEnum]


  export const VisitorsScalarFieldEnum: {
    id: 'id'
  };

  export type VisitorsScalarFieldEnum = (typeof VisitorsScalarFieldEnum)[keyof typeof VisitorsScalarFieldEnum]


  export const FavoritesScalarFieldEnum: {
    id: 'id',
    carId: 'carId',
    userId: 'userId'
  };

  export type FavoritesScalarFieldEnum = (typeof FavoritesScalarFieldEnum)[keyof typeof FavoritesScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    firstname: 'firstname',
    lastname: 'lastname',
    password: 'password',
    phone: 'phone',
    role: 'role',
    isEmailConfirmed: 'isEmailConfirmed',
    isPhoneConfirmed: 'isPhoneConfirmed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    fromUserId: 'fromUserId',
    toUserId: 'toUserId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const EntityScalarFieldEnum: {
    id: 'id',
    registrationNumber: 'registrationNumber',
    name: 'name',
    userId: 'userId'
  };

  export type EntityScalarFieldEnum = (typeof EntityScalarFieldEnum)[keyof typeof EntityScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    entityId: 'entityId',
    authorId: 'authorId',
    rate: 'rate',
    text: 'text'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


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
   * Reference to a field of type 'TransmissionType'
   */
  export type EnumTransmissionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransmissionType'>
    


  /**
   * Reference to a field of type 'TransmissionType[]'
   */
  export type ListEnumTransmissionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransmissionType[]'>
    


  /**
   * Reference to a field of type 'FuelType'
   */
  export type EnumFuelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FuelType'>
    


  /**
   * Reference to a field of type 'FuelType[]'
   */
  export type ListEnumFuelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FuelType[]'>
    


  /**
   * Reference to a field of type 'BodyStyle'
   */
  export type EnumBodyStyleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BodyStyle'>
    


  /**
   * Reference to a field of type 'BodyStyle[]'
   */
  export type ListEnumBodyStyleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BodyStyle[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type CarMakeWhereInput = {
    AND?: CarMakeWhereInput | CarMakeWhereInput[]
    OR?: CarMakeWhereInput[]
    NOT?: CarMakeWhereInput | CarMakeWhereInput[]
    id?: IntFilter<"CarMake"> | number
    name?: StringFilter<"CarMake"> | string
    slug?: StringFilter<"CarMake"> | string
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
    slug?: SortOrder
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
    slug?: StringFilter<"CarMake"> | string
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
    slug?: SortOrder
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
    slug?: StringWithAggregatesFilter<"CarMake"> | string
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
    slug?: StringFilter<"CarModel"> | string
    makeId?: IntFilter<"CarModel"> | number
    make?: XOR<CarMakeScalarRelationFilter, CarMakeWhereInput>
    cars?: CarsListRelationFilter
  }

  export type CarModelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
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
    slug?: StringFilter<"CarModel"> | string
    makeId?: IntFilter<"CarModel"> | number
    make?: XOR<CarMakeScalarRelationFilter, CarMakeWhereInput>
    cars?: CarsListRelationFilter
  }, "id" | "makeId_name">

  export type CarModelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
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
    slug?: StringWithAggregatesFilter<"CarModel"> | string
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
    transmissionType?: EnumTransmissionTypeFilter<"Cars"> | $Enums.TransmissionType
    fuelType?: EnumFuelTypeFilter<"Cars"> | $Enums.FuelType
    bodyStyle?: EnumBodyStyleFilter<"Cars"> | $Enums.BodyStyle
    engineVolume?: FloatFilter<"Cars"> | number
    userId?: IntFilter<"Cars"> | number
    createdAt?: DateTimeFilter<"Cars"> | Date | string
    updatedAt?: DateTimeFilter<"Cars"> | Date | string
    make?: XOR<CarMakeScalarRelationFilter, CarMakeWhereInput>
    model?: XOR<CarModelScalarRelationFilter, CarModelWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    carImages?: CarImagesListRelationFilter
    views?: ViewsListRelationFilter
    favorites?: FavoritesListRelationFilter
  }

  export type CarsOrderByWithRelationInput = {
    id?: SortOrder
    makeId?: SortOrder
    modelId?: SortOrder
    price?: SortOrder
    year?: SortOrder
    mileage?: SortOrder
    transmissionType?: SortOrder
    fuelType?: SortOrder
    bodyStyle?: SortOrder
    engineVolume?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    make?: CarMakeOrderByWithRelationInput
    model?: CarModelOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    carImages?: CarImagesOrderByRelationAggregateInput
    views?: ViewsOrderByRelationAggregateInput
    favorites?: FavoritesOrderByRelationAggregateInput
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
    transmissionType?: EnumTransmissionTypeFilter<"Cars"> | $Enums.TransmissionType
    fuelType?: EnumFuelTypeFilter<"Cars"> | $Enums.FuelType
    bodyStyle?: EnumBodyStyleFilter<"Cars"> | $Enums.BodyStyle
    engineVolume?: FloatFilter<"Cars"> | number
    userId?: IntFilter<"Cars"> | number
    createdAt?: DateTimeFilter<"Cars"> | Date | string
    updatedAt?: DateTimeFilter<"Cars"> | Date | string
    make?: XOR<CarMakeScalarRelationFilter, CarMakeWhereInput>
    model?: XOR<CarModelScalarRelationFilter, CarModelWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    carImages?: CarImagesListRelationFilter
    views?: ViewsListRelationFilter
    favorites?: FavoritesListRelationFilter
  }, "id">

  export type CarsOrderByWithAggregationInput = {
    id?: SortOrder
    makeId?: SortOrder
    modelId?: SortOrder
    price?: SortOrder
    year?: SortOrder
    mileage?: SortOrder
    transmissionType?: SortOrder
    fuelType?: SortOrder
    bodyStyle?: SortOrder
    engineVolume?: SortOrder
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
    transmissionType?: EnumTransmissionTypeWithAggregatesFilter<"Cars"> | $Enums.TransmissionType
    fuelType?: EnumFuelTypeWithAggregatesFilter<"Cars"> | $Enums.FuelType
    bodyStyle?: EnumBodyStyleWithAggregatesFilter<"Cars"> | $Enums.BodyStyle
    engineVolume?: FloatWithAggregatesFilter<"Cars"> | number
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

  export type ViewsWhereInput = {
    AND?: ViewsWhereInput | ViewsWhereInput[]
    OR?: ViewsWhereInput[]
    NOT?: ViewsWhereInput | ViewsWhereInput[]
    id?: IntFilter<"Views"> | number
    carId?: IntFilter<"Views"> | number
    userId?: IntNullableFilter<"Views"> | number | null
    visitorId?: IntNullableFilter<"Views"> | number | null
    car?: XOR<CarsScalarRelationFilter, CarsWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    visitor?: XOR<VisitorsNullableScalarRelationFilter, VisitorsWhereInput> | null
  }

  export type ViewsOrderByWithRelationInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrderInput | SortOrder
    visitorId?: SortOrderInput | SortOrder
    car?: CarsOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    visitor?: VisitorsOrderByWithRelationInput
  }

  export type ViewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ViewsWhereInput | ViewsWhereInput[]
    OR?: ViewsWhereInput[]
    NOT?: ViewsWhereInput | ViewsWhereInput[]
    carId?: IntFilter<"Views"> | number
    userId?: IntNullableFilter<"Views"> | number | null
    visitorId?: IntNullableFilter<"Views"> | number | null
    car?: XOR<CarsScalarRelationFilter, CarsWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    visitor?: XOR<VisitorsNullableScalarRelationFilter, VisitorsWhereInput> | null
  }, "id">

  export type ViewsOrderByWithAggregationInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrderInput | SortOrder
    visitorId?: SortOrderInput | SortOrder
    _count?: ViewsCountOrderByAggregateInput
    _avg?: ViewsAvgOrderByAggregateInput
    _max?: ViewsMaxOrderByAggregateInput
    _min?: ViewsMinOrderByAggregateInput
    _sum?: ViewsSumOrderByAggregateInput
  }

  export type ViewsScalarWhereWithAggregatesInput = {
    AND?: ViewsScalarWhereWithAggregatesInput | ViewsScalarWhereWithAggregatesInput[]
    OR?: ViewsScalarWhereWithAggregatesInput[]
    NOT?: ViewsScalarWhereWithAggregatesInput | ViewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Views"> | number
    carId?: IntWithAggregatesFilter<"Views"> | number
    userId?: IntNullableWithAggregatesFilter<"Views"> | number | null
    visitorId?: IntNullableWithAggregatesFilter<"Views"> | number | null
  }

  export type VisitorsWhereInput = {
    AND?: VisitorsWhereInput | VisitorsWhereInput[]
    OR?: VisitorsWhereInput[]
    NOT?: VisitorsWhereInput | VisitorsWhereInput[]
    id?: IntFilter<"Visitors"> | number
    views?: ViewsListRelationFilter
  }

  export type VisitorsOrderByWithRelationInput = {
    id?: SortOrder
    views?: ViewsOrderByRelationAggregateInput
  }

  export type VisitorsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VisitorsWhereInput | VisitorsWhereInput[]
    OR?: VisitorsWhereInput[]
    NOT?: VisitorsWhereInput | VisitorsWhereInput[]
    views?: ViewsListRelationFilter
  }, "id">

  export type VisitorsOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: VisitorsCountOrderByAggregateInput
    _avg?: VisitorsAvgOrderByAggregateInput
    _max?: VisitorsMaxOrderByAggregateInput
    _min?: VisitorsMinOrderByAggregateInput
    _sum?: VisitorsSumOrderByAggregateInput
  }

  export type VisitorsScalarWhereWithAggregatesInput = {
    AND?: VisitorsScalarWhereWithAggregatesInput | VisitorsScalarWhereWithAggregatesInput[]
    OR?: VisitorsScalarWhereWithAggregatesInput[]
    NOT?: VisitorsScalarWhereWithAggregatesInput | VisitorsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Visitors"> | number
  }

  export type FavoritesWhereInput = {
    AND?: FavoritesWhereInput | FavoritesWhereInput[]
    OR?: FavoritesWhereInput[]
    NOT?: FavoritesWhereInput | FavoritesWhereInput[]
    id?: IntFilter<"Favorites"> | number
    carId?: IntFilter<"Favorites"> | number
    userId?: IntFilter<"Favorites"> | number
    car?: XOR<CarsScalarRelationFilter, CarsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FavoritesOrderByWithRelationInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    car?: CarsOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type FavoritesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    carId_userId?: FavoritesCarIdUserIdCompoundUniqueInput
    AND?: FavoritesWhereInput | FavoritesWhereInput[]
    OR?: FavoritesWhereInput[]
    NOT?: FavoritesWhereInput | FavoritesWhereInput[]
    carId?: IntFilter<"Favorites"> | number
    userId?: IntFilter<"Favorites"> | number
    car?: XOR<CarsScalarRelationFilter, CarsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "carId_userId">

  export type FavoritesOrderByWithAggregationInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    _count?: FavoritesCountOrderByAggregateInput
    _avg?: FavoritesAvgOrderByAggregateInput
    _max?: FavoritesMaxOrderByAggregateInput
    _min?: FavoritesMinOrderByAggregateInput
    _sum?: FavoritesSumOrderByAggregateInput
  }

  export type FavoritesScalarWhereWithAggregatesInput = {
    AND?: FavoritesScalarWhereWithAggregatesInput | FavoritesScalarWhereWithAggregatesInput[]
    OR?: FavoritesScalarWhereWithAggregatesInput[]
    NOT?: FavoritesScalarWhereWithAggregatesInput | FavoritesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Favorites"> | number
    carId?: IntWithAggregatesFilter<"Favorites"> | number
    userId?: IntWithAggregatesFilter<"Favorites"> | number
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
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isEmailConfirmed?: BoolFilter<"User"> | boolean
    isPhoneConfirmed?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    cars?: CarsListRelationFilter
    entity?: EntityListRelationFilter
    reviews?: ReviewsListRelationFilter
    reviewed?: ReviewsListRelationFilter
    views?: ViewsListRelationFilter
    favorites?: FavoritesListRelationFilter
    sentMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    isEmailConfirmed?: SortOrder
    isPhoneConfirmed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cars?: CarsOrderByRelationAggregateInput
    entity?: EntityOrderByRelationAggregateInput
    reviews?: ReviewsOrderByRelationAggregateInput
    reviewed?: ReviewsOrderByRelationAggregateInput
    views?: ViewsOrderByRelationAggregateInput
    favorites?: FavoritesOrderByRelationAggregateInput
    sentMessages?: MessageOrderByRelationAggregateInput
    receivedMessages?: MessageOrderByRelationAggregateInput
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
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isEmailConfirmed?: BoolFilter<"User"> | boolean
    isPhoneConfirmed?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    cars?: CarsListRelationFilter
    entity?: EntityListRelationFilter
    reviews?: ReviewsListRelationFilter
    reviewed?: ReviewsListRelationFilter
    views?: ViewsListRelationFilter
    favorites?: FavoritesListRelationFilter
    sentMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    isEmailConfirmed?: SortOrder
    isPhoneConfirmed?: SortOrder
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
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isEmailConfirmed?: BoolWithAggregatesFilter<"User"> | boolean
    isPhoneConfirmed?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    fromUserId?: IntFilter<"Message"> | number
    toUserId?: IntFilter<"Message"> | number
    fromUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    toUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    fromUser?: UserOrderByWithRelationInput
    toUser?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    fromUserId?: IntFilter<"Message"> | number
    toUserId?: IntFilter<"Message"> | number
    fromUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    toUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    fromUserId?: IntWithAggregatesFilter<"Message"> | number
    toUserId?: IntWithAggregatesFilter<"Message"> | number
  }

  export type EntityWhereInput = {
    AND?: EntityWhereInput | EntityWhereInput[]
    OR?: EntityWhereInput[]
    NOT?: EntityWhereInput | EntityWhereInput[]
    id?: IntFilter<"Entity"> | number
    registrationNumber?: StringFilter<"Entity"> | string
    name?: StringFilter<"Entity"> | string
    userId?: IntFilter<"Entity"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviews?: ReviewsListRelationFilter
  }

  export type EntityOrderByWithRelationInput = {
    id?: SortOrder
    registrationNumber?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    reviews?: ReviewsOrderByRelationAggregateInput
  }

  export type EntityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EntityWhereInput | EntityWhereInput[]
    OR?: EntityWhereInput[]
    NOT?: EntityWhereInput | EntityWhereInput[]
    registrationNumber?: StringFilter<"Entity"> | string
    name?: StringFilter<"Entity"> | string
    userId?: IntFilter<"Entity"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviews?: ReviewsListRelationFilter
  }, "id">

  export type EntityOrderByWithAggregationInput = {
    id?: SortOrder
    registrationNumber?: SortOrder
    name?: SortOrder
    userId?: SortOrder
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
    registrationNumber?: StringWithAggregatesFilter<"Entity"> | string
    name?: StringWithAggregatesFilter<"Entity"> | string
    userId?: IntWithAggregatesFilter<"Entity"> | number
  }

  export type ReviewsWhereInput = {
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    id?: IntFilter<"Reviews"> | number
    userId?: IntNullableFilter<"Reviews"> | number | null
    entityId?: IntNullableFilter<"Reviews"> | number | null
    authorId?: IntFilter<"Reviews"> | number
    rate?: IntFilter<"Reviews"> | number
    text?: StringFilter<"Reviews"> | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    entity?: XOR<EntityNullableScalarRelationFilter, EntityWhereInput> | null
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReviewsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    entityId?: SortOrderInput | SortOrder
    authorId?: SortOrder
    rate?: SortOrder
    text?: SortOrder
    user?: UserOrderByWithRelationInput
    entity?: EntityOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
  }

  export type ReviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    userId?: IntNullableFilter<"Reviews"> | number | null
    entityId?: IntNullableFilter<"Reviews"> | number | null
    authorId?: IntFilter<"Reviews"> | number
    rate?: IntFilter<"Reviews"> | number
    text?: StringFilter<"Reviews"> | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    entity?: XOR<EntityNullableScalarRelationFilter, EntityWhereInput> | null
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReviewsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    entityId?: SortOrderInput | SortOrder
    authorId?: SortOrder
    rate?: SortOrder
    text?: SortOrder
    _count?: ReviewsCountOrderByAggregateInput
    _avg?: ReviewsAvgOrderByAggregateInput
    _max?: ReviewsMaxOrderByAggregateInput
    _min?: ReviewsMinOrderByAggregateInput
    _sum?: ReviewsSumOrderByAggregateInput
  }

  export type ReviewsScalarWhereWithAggregatesInput = {
    AND?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    OR?: ReviewsScalarWhereWithAggregatesInput[]
    NOT?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reviews"> | number
    userId?: IntNullableWithAggregatesFilter<"Reviews"> | number | null
    entityId?: IntNullableWithAggregatesFilter<"Reviews"> | number | null
    authorId?: IntWithAggregatesFilter<"Reviews"> | number
    rate?: IntWithAggregatesFilter<"Reviews"> | number
    text?: StringWithAggregatesFilter<"Reviews"> | string
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
    slug: string
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
    slug: string
    countryOfOrigin?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: CarModelUncheckedCreateNestedManyWithoutMakeInput
    cars?: CarsUncheckedCreateNestedManyWithoutMakeInput
  }

  export type CarMakeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
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
    slug?: StringFieldUpdateOperationsInput | string
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
    slug: string
    countryOfOrigin?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarMakeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    countryOfOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarMakeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    countryOfOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarModelCreateInput = {
    name: string
    slug: string
    make: CarMakeCreateNestedOneWithoutModelsInput
    cars?: CarsCreateNestedManyWithoutModelInput
  }

  export type CarModelUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    makeId: number
    cars?: CarsUncheckedCreateNestedManyWithoutModelInput
  }

  export type CarModelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    make?: CarMakeUpdateOneRequiredWithoutModelsNestedInput
    cars?: CarsUpdateManyWithoutModelNestedInput
  }

  export type CarModelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    makeId?: IntFieldUpdateOperationsInput | number
    cars?: CarsUncheckedUpdateManyWithoutModelNestedInput
  }

  export type CarModelCreateManyInput = {
    id?: number
    name: string
    slug: string
    makeId: number
  }

  export type CarModelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type CarModelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    makeId?: IntFieldUpdateOperationsInput | number
  }

  export type CarsCreateInput = {
    price: number
    year: number
    mileage: number
    transmissionType: $Enums.TransmissionType
    fuelType: $Enums.FuelType
    bodyStyle: $Enums.BodyStyle
    engineVolume: number
    createdAt?: Date | string
    updatedAt?: Date | string
    make: CarMakeCreateNestedOneWithoutCarsInput
    model: CarModelCreateNestedOneWithoutCarsInput
    user: UserCreateNestedOneWithoutCarsInput
    carImages?: CarImagesCreateNestedManyWithoutCarInput
    views?: ViewsCreateNestedManyWithoutCarInput
    favorites?: FavoritesCreateNestedManyWithoutCarInput
  }

  export type CarsUncheckedCreateInput = {
    id?: number
    makeId: number
    modelId: number
    price: number
    year: number
    mileage: number
    transmissionType: $Enums.TransmissionType
    fuelType: $Enums.FuelType
    bodyStyle: $Enums.BodyStyle
    engineVolume: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    carImages?: CarImagesUncheckedCreateNestedManyWithoutCarInput
    views?: ViewsUncheckedCreateNestedManyWithoutCarInput
    favorites?: FavoritesUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarsUpdateInput = {
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    transmissionType?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    bodyStyle?: EnumBodyStyleFieldUpdateOperationsInput | $Enums.BodyStyle
    engineVolume?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    make?: CarMakeUpdateOneRequiredWithoutCarsNestedInput
    model?: CarModelUpdateOneRequiredWithoutCarsNestedInput
    user?: UserUpdateOneRequiredWithoutCarsNestedInput
    carImages?: CarImagesUpdateManyWithoutCarNestedInput
    views?: ViewsUpdateManyWithoutCarNestedInput
    favorites?: FavoritesUpdateManyWithoutCarNestedInput
  }

  export type CarsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    makeId?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    transmissionType?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    bodyStyle?: EnumBodyStyleFieldUpdateOperationsInput | $Enums.BodyStyle
    engineVolume?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carImages?: CarImagesUncheckedUpdateManyWithoutCarNestedInput
    views?: ViewsUncheckedUpdateManyWithoutCarNestedInput
    favorites?: FavoritesUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarsCreateManyInput = {
    id?: number
    makeId: number
    modelId: number
    price: number
    year: number
    mileage: number
    transmissionType: $Enums.TransmissionType
    fuelType: $Enums.FuelType
    bodyStyle: $Enums.BodyStyle
    engineVolume: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarsUpdateManyMutationInput = {
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    transmissionType?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    bodyStyle?: EnumBodyStyleFieldUpdateOperationsInput | $Enums.BodyStyle
    engineVolume?: FloatFieldUpdateOperationsInput | number
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
    transmissionType?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    bodyStyle?: EnumBodyStyleFieldUpdateOperationsInput | $Enums.BodyStyle
    engineVolume?: FloatFieldUpdateOperationsInput | number
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

  export type ViewsCreateInput = {
    car: CarsCreateNestedOneWithoutViewsInput
    user?: UserCreateNestedOneWithoutViewsInput
    visitor?: VisitorsCreateNestedOneWithoutViewsInput
  }

  export type ViewsUncheckedCreateInput = {
    id?: number
    carId: number
    userId?: number | null
    visitorId?: number | null
  }

  export type ViewsUpdateInput = {
    car?: CarsUpdateOneRequiredWithoutViewsNestedInput
    user?: UserUpdateOneWithoutViewsNestedInput
    visitor?: VisitorsUpdateOneWithoutViewsNestedInput
  }

  export type ViewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    visitorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ViewsCreateManyInput = {
    id?: number
    carId: number
    userId?: number | null
    visitorId?: number | null
  }

  export type ViewsUpdateManyMutationInput = {

  }

  export type ViewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    visitorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VisitorsCreateInput = {
    views?: ViewsCreateNestedManyWithoutVisitorInput
  }

  export type VisitorsUncheckedCreateInput = {
    id?: number
    views?: ViewsUncheckedCreateNestedManyWithoutVisitorInput
  }

  export type VisitorsUpdateInput = {
    views?: ViewsUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    views?: ViewsUncheckedUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorsCreateManyInput = {
    id?: number
  }

  export type VisitorsUpdateManyMutationInput = {

  }

  export type VisitorsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type FavoritesCreateInput = {
    car: CarsCreateNestedOneWithoutFavoritesInput
    user: UserCreateNestedOneWithoutFavoritesInput
  }

  export type FavoritesUncheckedCreateInput = {
    id?: number
    carId: number
    userId: number
  }

  export type FavoritesUpdateInput = {
    car?: CarsUpdateOneRequiredWithoutFavoritesNestedInput
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoritesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type FavoritesCreateManyInput = {
    id?: number
    carId: number
    userId: number
  }

  export type FavoritesUpdateManyMutationInput = {

  }

  export type FavoritesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    email: string
    firstname: string
    lastname: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    isEmailConfirmed?: boolean
    isPhoneConfirmed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarsCreateNestedManyWithoutUserInput
    entity?: EntityCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    reviewed?: ReviewsCreateNestedManyWithoutAuthorInput
    views?: ViewsCreateNestedManyWithoutUserInput
    favorites?: FavoritesCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    firstname: string
    lastname: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    isEmailConfirmed?: boolean
    isPhoneConfirmed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarsUncheckedCreateNestedManyWithoutUserInput
    entity?: EntityUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    reviewed?: ReviewsUncheckedCreateNestedManyWithoutAuthorInput
    views?: ViewsUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoritesUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    isPhoneConfirmed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarsUpdateManyWithoutUserNestedInput
    entity?: EntityUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    reviewed?: ReviewsUpdateManyWithoutAuthorNestedInput
    views?: ViewsUpdateManyWithoutUserNestedInput
    favorites?: FavoritesUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    isPhoneConfirmed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarsUncheckedUpdateManyWithoutUserNestedInput
    entity?: EntityUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    reviewed?: ReviewsUncheckedUpdateManyWithoutAuthorNestedInput
    views?: ViewsUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoritesUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    firstname: string
    lastname: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    isEmailConfirmed?: boolean
    isPhoneConfirmed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    isPhoneConfirmed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    isPhoneConfirmed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    fromUser: UserCreateNestedOneWithoutSentMessagesInput
    toUser: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    fromUserId: number
    toUserId: number
  }

  export type MessageUpdateInput = {
    fromUser?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    toUser?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromUserId?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageCreateManyInput = {
    id?: number
    fromUserId: number
    toUserId: number
  }

  export type MessageUpdateManyMutationInput = {

  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromUserId?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
  }

  export type EntityCreateInput = {
    registrationNumber: string
    name: string
    user: UserCreateNestedOneWithoutEntityInput
    reviews?: ReviewsCreateNestedManyWithoutEntityInput
  }

  export type EntityUncheckedCreateInput = {
    id?: number
    registrationNumber: string
    name: string
    userId: number
    reviews?: ReviewsUncheckedCreateNestedManyWithoutEntityInput
  }

  export type EntityUpdateInput = {
    registrationNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutEntityNestedInput
    reviews?: ReviewsUpdateManyWithoutEntityNestedInput
  }

  export type EntityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    registrationNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    reviews?: ReviewsUncheckedUpdateManyWithoutEntityNestedInput
  }

  export type EntityCreateManyInput = {
    id?: number
    registrationNumber: string
    name: string
    userId: number
  }

  export type EntityUpdateManyMutationInput = {
    registrationNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EntityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    registrationNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewsCreateInput = {
    rate: number
    text: string
    user?: UserCreateNestedOneWithoutReviewsInput
    entity?: EntityCreateNestedOneWithoutReviewsInput
    author: UserCreateNestedOneWithoutReviewedInput
  }

  export type ReviewsUncheckedCreateInput = {
    id?: number
    userId?: number | null
    entityId?: number | null
    authorId: number
    rate: number
    text: string
  }

  export type ReviewsUpdateInput = {
    rate?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutReviewsNestedInput
    entity?: EntityUpdateOneWithoutReviewsNestedInput
    author?: UserUpdateOneRequiredWithoutReviewedNestedInput
  }

  export type ReviewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    authorId?: IntFieldUpdateOperationsInput | number
    rate?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsCreateManyInput = {
    id?: number
    userId?: number | null
    entityId?: number | null
    authorId: number
    rate: number
    text: string
  }

  export type ReviewsUpdateManyMutationInput = {
    rate?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    authorId?: IntFieldUpdateOperationsInput | number
    rate?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
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
    slug?: SortOrder
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
    slug?: SortOrder
    countryOfOrigin?: SortOrder
    logoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarMakeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
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
    slug?: SortOrder
    makeId?: SortOrder
  }

  export type CarModelAvgOrderByAggregateInput = {
    id?: SortOrder
    makeId?: SortOrder
  }

  export type CarModelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    makeId?: SortOrder
  }

  export type CarModelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    makeId?: SortOrder
  }

  export type CarModelSumOrderByAggregateInput = {
    id?: SortOrder
    makeId?: SortOrder
  }

  export type EnumTransmissionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransmissionType | EnumTransmissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransmissionType[] | ListEnumTransmissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransmissionType[] | ListEnumTransmissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransmissionTypeFilter<$PrismaModel> | $Enums.TransmissionType
  }

  export type EnumFuelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFuelTypeFilter<$PrismaModel> | $Enums.FuelType
  }

  export type EnumBodyStyleFilter<$PrismaModel = never> = {
    equals?: $Enums.BodyStyle | EnumBodyStyleFieldRefInput<$PrismaModel>
    in?: $Enums.BodyStyle[] | ListEnumBodyStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.BodyStyle[] | ListEnumBodyStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumBodyStyleFilter<$PrismaModel> | $Enums.BodyStyle
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type ViewsListRelationFilter = {
    every?: ViewsWhereInput
    some?: ViewsWhereInput
    none?: ViewsWhereInput
  }

  export type FavoritesListRelationFilter = {
    every?: FavoritesWhereInput
    some?: FavoritesWhereInput
    none?: FavoritesWhereInput
  }

  export type CarImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoritesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarsCountOrderByAggregateInput = {
    id?: SortOrder
    makeId?: SortOrder
    modelId?: SortOrder
    price?: SortOrder
    year?: SortOrder
    mileage?: SortOrder
    transmissionType?: SortOrder
    fuelType?: SortOrder
    bodyStyle?: SortOrder
    engineVolume?: SortOrder
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
    engineVolume?: SortOrder
    userId?: SortOrder
  }

  export type CarsMaxOrderByAggregateInput = {
    id?: SortOrder
    makeId?: SortOrder
    modelId?: SortOrder
    price?: SortOrder
    year?: SortOrder
    mileage?: SortOrder
    transmissionType?: SortOrder
    fuelType?: SortOrder
    bodyStyle?: SortOrder
    engineVolume?: SortOrder
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
    transmissionType?: SortOrder
    fuelType?: SortOrder
    bodyStyle?: SortOrder
    engineVolume?: SortOrder
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
    engineVolume?: SortOrder
    userId?: SortOrder
  }

  export type EnumTransmissionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransmissionType | EnumTransmissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransmissionType[] | ListEnumTransmissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransmissionType[] | ListEnumTransmissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransmissionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransmissionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransmissionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransmissionTypeFilter<$PrismaModel>
  }

  export type EnumFuelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFuelTypeWithAggregatesFilter<$PrismaModel> | $Enums.FuelType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFuelTypeFilter<$PrismaModel>
    _max?: NestedEnumFuelTypeFilter<$PrismaModel>
  }

  export type EnumBodyStyleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BodyStyle | EnumBodyStyleFieldRefInput<$PrismaModel>
    in?: $Enums.BodyStyle[] | ListEnumBodyStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.BodyStyle[] | ListEnumBodyStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumBodyStyleWithAggregatesFilter<$PrismaModel> | $Enums.BodyStyle
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBodyStyleFilter<$PrismaModel>
    _max?: NestedEnumBodyStyleFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type VisitorsNullableScalarRelationFilter = {
    is?: VisitorsWhereInput | null
    isNot?: VisitorsWhereInput | null
  }

  export type ViewsCountOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    visitorId?: SortOrder
  }

  export type ViewsAvgOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    visitorId?: SortOrder
  }

  export type ViewsMaxOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    visitorId?: SortOrder
  }

  export type ViewsMinOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    visitorId?: SortOrder
  }

  export type ViewsSumOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    visitorId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type VisitorsCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VisitorsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VisitorsMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VisitorsMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VisitorsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FavoritesCarIdUserIdCompoundUniqueInput = {
    carId: number
    userId: number
  }

  export type FavoritesCountOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
  }

  export type FavoritesAvgOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
  }

  export type FavoritesMaxOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
  }

  export type FavoritesMinOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
  }

  export type FavoritesSumOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EntityListRelationFilter = {
    every?: EntityWhereInput
    some?: EntityWhereInput
    none?: EntityWhereInput
  }

  export type ReviewsListRelationFilter = {
    every?: ReviewsWhereInput
    some?: ReviewsWhereInput
    none?: ReviewsWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type EntityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isEmailConfirmed?: SortOrder
    isPhoneConfirmed?: SortOrder
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
    phone?: SortOrder
    role?: SortOrder
    isEmailConfirmed?: SortOrder
    isPhoneConfirmed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isEmailConfirmed?: SortOrder
    isPhoneConfirmed?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
  }

  export type EntityCountOrderByAggregateInput = {
    id?: SortOrder
    registrationNumber?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type EntityAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EntityMaxOrderByAggregateInput = {
    id?: SortOrder
    registrationNumber?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type EntityMinOrderByAggregateInput = {
    id?: SortOrder
    registrationNumber?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type EntitySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EntityNullableScalarRelationFilter = {
    is?: EntityWhereInput | null
    isNot?: EntityWhereInput | null
  }

  export type ReviewsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    entityId?: SortOrder
    authorId?: SortOrder
    rate?: SortOrder
    text?: SortOrder
  }

  export type ReviewsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    entityId?: SortOrder
    authorId?: SortOrder
    rate?: SortOrder
  }

  export type ReviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    entityId?: SortOrder
    authorId?: SortOrder
    rate?: SortOrder
    text?: SortOrder
  }

  export type ReviewsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    entityId?: SortOrder
    authorId?: SortOrder
    rate?: SortOrder
    text?: SortOrder
  }

  export type ReviewsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    entityId?: SortOrder
    authorId?: SortOrder
    rate?: SortOrder
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

  export type ViewsCreateNestedManyWithoutCarInput = {
    create?: XOR<ViewsCreateWithoutCarInput, ViewsUncheckedCreateWithoutCarInput> | ViewsCreateWithoutCarInput[] | ViewsUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ViewsCreateOrConnectWithoutCarInput | ViewsCreateOrConnectWithoutCarInput[]
    createMany?: ViewsCreateManyCarInputEnvelope
    connect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
  }

  export type FavoritesCreateNestedManyWithoutCarInput = {
    create?: XOR<FavoritesCreateWithoutCarInput, FavoritesUncheckedCreateWithoutCarInput> | FavoritesCreateWithoutCarInput[] | FavoritesUncheckedCreateWithoutCarInput[]
    connectOrCreate?: FavoritesCreateOrConnectWithoutCarInput | FavoritesCreateOrConnectWithoutCarInput[]
    createMany?: FavoritesCreateManyCarInputEnvelope
    connect?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
  }

  export type CarImagesUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<CarImagesCreateWithoutCarInput, CarImagesUncheckedCreateWithoutCarInput> | CarImagesCreateWithoutCarInput[] | CarImagesUncheckedCreateWithoutCarInput[]
    connectOrCreate?: CarImagesCreateOrConnectWithoutCarInput | CarImagesCreateOrConnectWithoutCarInput[]
    createMany?: CarImagesCreateManyCarInputEnvelope
    connect?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
  }

  export type ViewsUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<ViewsCreateWithoutCarInput, ViewsUncheckedCreateWithoutCarInput> | ViewsCreateWithoutCarInput[] | ViewsUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ViewsCreateOrConnectWithoutCarInput | ViewsCreateOrConnectWithoutCarInput[]
    createMany?: ViewsCreateManyCarInputEnvelope
    connect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
  }

  export type FavoritesUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<FavoritesCreateWithoutCarInput, FavoritesUncheckedCreateWithoutCarInput> | FavoritesCreateWithoutCarInput[] | FavoritesUncheckedCreateWithoutCarInput[]
    connectOrCreate?: FavoritesCreateOrConnectWithoutCarInput | FavoritesCreateOrConnectWithoutCarInput[]
    createMany?: FavoritesCreateManyCarInputEnvelope
    connect?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
  }

  export type EnumTransmissionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransmissionType
  }

  export type EnumFuelTypeFieldUpdateOperationsInput = {
    set?: $Enums.FuelType
  }

  export type EnumBodyStyleFieldUpdateOperationsInput = {
    set?: $Enums.BodyStyle
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type ViewsUpdateManyWithoutCarNestedInput = {
    create?: XOR<ViewsCreateWithoutCarInput, ViewsUncheckedCreateWithoutCarInput> | ViewsCreateWithoutCarInput[] | ViewsUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ViewsCreateOrConnectWithoutCarInput | ViewsCreateOrConnectWithoutCarInput[]
    upsert?: ViewsUpsertWithWhereUniqueWithoutCarInput | ViewsUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: ViewsCreateManyCarInputEnvelope
    set?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    disconnect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    delete?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    connect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    update?: ViewsUpdateWithWhereUniqueWithoutCarInput | ViewsUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: ViewsUpdateManyWithWhereWithoutCarInput | ViewsUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: ViewsScalarWhereInput | ViewsScalarWhereInput[]
  }

  export type FavoritesUpdateManyWithoutCarNestedInput = {
    create?: XOR<FavoritesCreateWithoutCarInput, FavoritesUncheckedCreateWithoutCarInput> | FavoritesCreateWithoutCarInput[] | FavoritesUncheckedCreateWithoutCarInput[]
    connectOrCreate?: FavoritesCreateOrConnectWithoutCarInput | FavoritesCreateOrConnectWithoutCarInput[]
    upsert?: FavoritesUpsertWithWhereUniqueWithoutCarInput | FavoritesUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: FavoritesCreateManyCarInputEnvelope
    set?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    disconnect?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    delete?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    connect?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    update?: FavoritesUpdateWithWhereUniqueWithoutCarInput | FavoritesUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: FavoritesUpdateManyWithWhereWithoutCarInput | FavoritesUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: FavoritesScalarWhereInput | FavoritesScalarWhereInput[]
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

  export type ViewsUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<ViewsCreateWithoutCarInput, ViewsUncheckedCreateWithoutCarInput> | ViewsCreateWithoutCarInput[] | ViewsUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ViewsCreateOrConnectWithoutCarInput | ViewsCreateOrConnectWithoutCarInput[]
    upsert?: ViewsUpsertWithWhereUniqueWithoutCarInput | ViewsUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: ViewsCreateManyCarInputEnvelope
    set?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    disconnect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    delete?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    connect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    update?: ViewsUpdateWithWhereUniqueWithoutCarInput | ViewsUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: ViewsUpdateManyWithWhereWithoutCarInput | ViewsUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: ViewsScalarWhereInput | ViewsScalarWhereInput[]
  }

  export type FavoritesUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<FavoritesCreateWithoutCarInput, FavoritesUncheckedCreateWithoutCarInput> | FavoritesCreateWithoutCarInput[] | FavoritesUncheckedCreateWithoutCarInput[]
    connectOrCreate?: FavoritesCreateOrConnectWithoutCarInput | FavoritesCreateOrConnectWithoutCarInput[]
    upsert?: FavoritesUpsertWithWhereUniqueWithoutCarInput | FavoritesUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: FavoritesCreateManyCarInputEnvelope
    set?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    disconnect?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    delete?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    connect?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    update?: FavoritesUpdateWithWhereUniqueWithoutCarInput | FavoritesUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: FavoritesUpdateManyWithWhereWithoutCarInput | FavoritesUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: FavoritesScalarWhereInput | FavoritesScalarWhereInput[]
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

  export type CarsCreateNestedOneWithoutViewsInput = {
    create?: XOR<CarsCreateWithoutViewsInput, CarsUncheckedCreateWithoutViewsInput>
    connectOrCreate?: CarsCreateOrConnectWithoutViewsInput
    connect?: CarsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutViewsInput = {
    create?: XOR<UserCreateWithoutViewsInput, UserUncheckedCreateWithoutViewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewsInput
    connect?: UserWhereUniqueInput
  }

  export type VisitorsCreateNestedOneWithoutViewsInput = {
    create?: XOR<VisitorsCreateWithoutViewsInput, VisitorsUncheckedCreateWithoutViewsInput>
    connectOrCreate?: VisitorsCreateOrConnectWithoutViewsInput
    connect?: VisitorsWhereUniqueInput
  }

  export type CarsUpdateOneRequiredWithoutViewsNestedInput = {
    create?: XOR<CarsCreateWithoutViewsInput, CarsUncheckedCreateWithoutViewsInput>
    connectOrCreate?: CarsCreateOrConnectWithoutViewsInput
    upsert?: CarsUpsertWithoutViewsInput
    connect?: CarsWhereUniqueInput
    update?: XOR<XOR<CarsUpdateToOneWithWhereWithoutViewsInput, CarsUpdateWithoutViewsInput>, CarsUncheckedUpdateWithoutViewsInput>
  }

  export type UserUpdateOneWithoutViewsNestedInput = {
    create?: XOR<UserCreateWithoutViewsInput, UserUncheckedCreateWithoutViewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewsInput
    upsert?: UserUpsertWithoutViewsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutViewsInput, UserUpdateWithoutViewsInput>, UserUncheckedUpdateWithoutViewsInput>
  }

  export type VisitorsUpdateOneWithoutViewsNestedInput = {
    create?: XOR<VisitorsCreateWithoutViewsInput, VisitorsUncheckedCreateWithoutViewsInput>
    connectOrCreate?: VisitorsCreateOrConnectWithoutViewsInput
    upsert?: VisitorsUpsertWithoutViewsInput
    disconnect?: VisitorsWhereInput | boolean
    delete?: VisitorsWhereInput | boolean
    connect?: VisitorsWhereUniqueInput
    update?: XOR<XOR<VisitorsUpdateToOneWithWhereWithoutViewsInput, VisitorsUpdateWithoutViewsInput>, VisitorsUncheckedUpdateWithoutViewsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ViewsCreateNestedManyWithoutVisitorInput = {
    create?: XOR<ViewsCreateWithoutVisitorInput, ViewsUncheckedCreateWithoutVisitorInput> | ViewsCreateWithoutVisitorInput[] | ViewsUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: ViewsCreateOrConnectWithoutVisitorInput | ViewsCreateOrConnectWithoutVisitorInput[]
    createMany?: ViewsCreateManyVisitorInputEnvelope
    connect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
  }

  export type ViewsUncheckedCreateNestedManyWithoutVisitorInput = {
    create?: XOR<ViewsCreateWithoutVisitorInput, ViewsUncheckedCreateWithoutVisitorInput> | ViewsCreateWithoutVisitorInput[] | ViewsUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: ViewsCreateOrConnectWithoutVisitorInput | ViewsCreateOrConnectWithoutVisitorInput[]
    createMany?: ViewsCreateManyVisitorInputEnvelope
    connect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
  }

  export type ViewsUpdateManyWithoutVisitorNestedInput = {
    create?: XOR<ViewsCreateWithoutVisitorInput, ViewsUncheckedCreateWithoutVisitorInput> | ViewsCreateWithoutVisitorInput[] | ViewsUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: ViewsCreateOrConnectWithoutVisitorInput | ViewsCreateOrConnectWithoutVisitorInput[]
    upsert?: ViewsUpsertWithWhereUniqueWithoutVisitorInput | ViewsUpsertWithWhereUniqueWithoutVisitorInput[]
    createMany?: ViewsCreateManyVisitorInputEnvelope
    set?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    disconnect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    delete?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    connect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    update?: ViewsUpdateWithWhereUniqueWithoutVisitorInput | ViewsUpdateWithWhereUniqueWithoutVisitorInput[]
    updateMany?: ViewsUpdateManyWithWhereWithoutVisitorInput | ViewsUpdateManyWithWhereWithoutVisitorInput[]
    deleteMany?: ViewsScalarWhereInput | ViewsScalarWhereInput[]
  }

  export type ViewsUncheckedUpdateManyWithoutVisitorNestedInput = {
    create?: XOR<ViewsCreateWithoutVisitorInput, ViewsUncheckedCreateWithoutVisitorInput> | ViewsCreateWithoutVisitorInput[] | ViewsUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: ViewsCreateOrConnectWithoutVisitorInput | ViewsCreateOrConnectWithoutVisitorInput[]
    upsert?: ViewsUpsertWithWhereUniqueWithoutVisitorInput | ViewsUpsertWithWhereUniqueWithoutVisitorInput[]
    createMany?: ViewsCreateManyVisitorInputEnvelope
    set?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    disconnect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    delete?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    connect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    update?: ViewsUpdateWithWhereUniqueWithoutVisitorInput | ViewsUpdateWithWhereUniqueWithoutVisitorInput[]
    updateMany?: ViewsUpdateManyWithWhereWithoutVisitorInput | ViewsUpdateManyWithWhereWithoutVisitorInput[]
    deleteMany?: ViewsScalarWhereInput | ViewsScalarWhereInput[]
  }

  export type CarsCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<CarsCreateWithoutFavoritesInput, CarsUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: CarsCreateOrConnectWithoutFavoritesInput
    connect?: CarsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    connect?: UserWhereUniqueInput
  }

  export type CarsUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<CarsCreateWithoutFavoritesInput, CarsUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: CarsCreateOrConnectWithoutFavoritesInput
    upsert?: CarsUpsertWithoutFavoritesInput
    connect?: CarsWhereUniqueInput
    update?: XOR<XOR<CarsUpdateToOneWithWhereWithoutFavoritesInput, CarsUpdateWithoutFavoritesInput>, CarsUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    upsert?: UserUpsertWithoutFavoritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoritesInput, UserUpdateWithoutFavoritesInput>, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type CarsCreateNestedManyWithoutUserInput = {
    create?: XOR<CarsCreateWithoutUserInput, CarsUncheckedCreateWithoutUserInput> | CarsCreateWithoutUserInput[] | CarsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutUserInput | CarsCreateOrConnectWithoutUserInput[]
    createMany?: CarsCreateManyUserInputEnvelope
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
  }

  export type EntityCreateNestedManyWithoutUserInput = {
    create?: XOR<EntityCreateWithoutUserInput, EntityUncheckedCreateWithoutUserInput> | EntityCreateWithoutUserInput[] | EntityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EntityCreateOrConnectWithoutUserInput | EntityCreateOrConnectWithoutUserInput[]
    createMany?: EntityCreateManyUserInputEnvelope
    connect?: EntityWhereUniqueInput | EntityWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ReviewsCreateWithoutAuthorInput, ReviewsUncheckedCreateWithoutAuthorInput> | ReviewsCreateWithoutAuthorInput[] | ReviewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutAuthorInput | ReviewsCreateOrConnectWithoutAuthorInput[]
    createMany?: ReviewsCreateManyAuthorInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type ViewsCreateNestedManyWithoutUserInput = {
    create?: XOR<ViewsCreateWithoutUserInput, ViewsUncheckedCreateWithoutUserInput> | ViewsCreateWithoutUserInput[] | ViewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewsCreateOrConnectWithoutUserInput | ViewsCreateOrConnectWithoutUserInput[]
    createMany?: ViewsCreateManyUserInputEnvelope
    connect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
  }

  export type FavoritesCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoritesCreateWithoutUserInput, FavoritesUncheckedCreateWithoutUserInput> | FavoritesCreateWithoutUserInput[] | FavoritesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoritesCreateOrConnectWithoutUserInput | FavoritesCreateOrConnectWithoutUserInput[]
    createMany?: FavoritesCreateManyUserInputEnvelope
    connect?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutFromUserInput = {
    create?: XOR<MessageCreateWithoutFromUserInput, MessageUncheckedCreateWithoutFromUserInput> | MessageCreateWithoutFromUserInput[] | MessageUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutFromUserInput | MessageCreateOrConnectWithoutFromUserInput[]
    createMany?: MessageCreateManyFromUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutToUserInput = {
    create?: XOR<MessageCreateWithoutToUserInput, MessageUncheckedCreateWithoutToUserInput> | MessageCreateWithoutToUserInput[] | MessageUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutToUserInput | MessageCreateOrConnectWithoutToUserInput[]
    createMany?: MessageCreateManyToUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type CarsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CarsCreateWithoutUserInput, CarsUncheckedCreateWithoutUserInput> | CarsCreateWithoutUserInput[] | CarsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutUserInput | CarsCreateOrConnectWithoutUserInput[]
    createMany?: CarsCreateManyUserInputEnvelope
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
  }

  export type EntityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EntityCreateWithoutUserInput, EntityUncheckedCreateWithoutUserInput> | EntityCreateWithoutUserInput[] | EntityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EntityCreateOrConnectWithoutUserInput | EntityCreateOrConnectWithoutUserInput[]
    createMany?: EntityCreateManyUserInputEnvelope
    connect?: EntityWhereUniqueInput | EntityWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ReviewsCreateWithoutAuthorInput, ReviewsUncheckedCreateWithoutAuthorInput> | ReviewsCreateWithoutAuthorInput[] | ReviewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutAuthorInput | ReviewsCreateOrConnectWithoutAuthorInput[]
    createMany?: ReviewsCreateManyAuthorInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type ViewsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ViewsCreateWithoutUserInput, ViewsUncheckedCreateWithoutUserInput> | ViewsCreateWithoutUserInput[] | ViewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewsCreateOrConnectWithoutUserInput | ViewsCreateOrConnectWithoutUserInput[]
    createMany?: ViewsCreateManyUserInputEnvelope
    connect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
  }

  export type FavoritesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoritesCreateWithoutUserInput, FavoritesUncheckedCreateWithoutUserInput> | FavoritesCreateWithoutUserInput[] | FavoritesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoritesCreateOrConnectWithoutUserInput | FavoritesCreateOrConnectWithoutUserInput[]
    createMany?: FavoritesCreateManyUserInputEnvelope
    connect?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutFromUserInput = {
    create?: XOR<MessageCreateWithoutFromUserInput, MessageUncheckedCreateWithoutFromUserInput> | MessageCreateWithoutFromUserInput[] | MessageUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutFromUserInput | MessageCreateOrConnectWithoutFromUserInput[]
    createMany?: MessageCreateManyFromUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutToUserInput = {
    create?: XOR<MessageCreateWithoutToUserInput, MessageUncheckedCreateWithoutToUserInput> | MessageCreateWithoutToUserInput[] | MessageUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutToUserInput | MessageCreateOrConnectWithoutToUserInput[]
    createMany?: MessageCreateManyToUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type EntityUpdateManyWithoutUserNestedInput = {
    create?: XOR<EntityCreateWithoutUserInput, EntityUncheckedCreateWithoutUserInput> | EntityCreateWithoutUserInput[] | EntityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EntityCreateOrConnectWithoutUserInput | EntityCreateOrConnectWithoutUserInput[]
    upsert?: EntityUpsertWithWhereUniqueWithoutUserInput | EntityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EntityCreateManyUserInputEnvelope
    set?: EntityWhereUniqueInput | EntityWhereUniqueInput[]
    disconnect?: EntityWhereUniqueInput | EntityWhereUniqueInput[]
    delete?: EntityWhereUniqueInput | EntityWhereUniqueInput[]
    connect?: EntityWhereUniqueInput | EntityWhereUniqueInput[]
    update?: EntityUpdateWithWhereUniqueWithoutUserInput | EntityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EntityUpdateManyWithWhereWithoutUserInput | EntityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EntityScalarWhereInput | EntityScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUserInput | ReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUserInput | ReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUserInput | ReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ReviewsCreateWithoutAuthorInput, ReviewsUncheckedCreateWithoutAuthorInput> | ReviewsCreateWithoutAuthorInput[] | ReviewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutAuthorInput | ReviewsCreateOrConnectWithoutAuthorInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutAuthorInput | ReviewsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ReviewsCreateManyAuthorInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutAuthorInput | ReviewsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutAuthorInput | ReviewsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type ViewsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ViewsCreateWithoutUserInput, ViewsUncheckedCreateWithoutUserInput> | ViewsCreateWithoutUserInput[] | ViewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewsCreateOrConnectWithoutUserInput | ViewsCreateOrConnectWithoutUserInput[]
    upsert?: ViewsUpsertWithWhereUniqueWithoutUserInput | ViewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ViewsCreateManyUserInputEnvelope
    set?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    disconnect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    delete?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    connect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    update?: ViewsUpdateWithWhereUniqueWithoutUserInput | ViewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ViewsUpdateManyWithWhereWithoutUserInput | ViewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ViewsScalarWhereInput | ViewsScalarWhereInput[]
  }

  export type FavoritesUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoritesCreateWithoutUserInput, FavoritesUncheckedCreateWithoutUserInput> | FavoritesCreateWithoutUserInput[] | FavoritesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoritesCreateOrConnectWithoutUserInput | FavoritesCreateOrConnectWithoutUserInput[]
    upsert?: FavoritesUpsertWithWhereUniqueWithoutUserInput | FavoritesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoritesCreateManyUserInputEnvelope
    set?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    disconnect?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    delete?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    connect?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    update?: FavoritesUpdateWithWhereUniqueWithoutUserInput | FavoritesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoritesUpdateManyWithWhereWithoutUserInput | FavoritesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoritesScalarWhereInput | FavoritesScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<MessageCreateWithoutFromUserInput, MessageUncheckedCreateWithoutFromUserInput> | MessageCreateWithoutFromUserInput[] | MessageUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutFromUserInput | MessageCreateOrConnectWithoutFromUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutFromUserInput | MessageUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: MessageCreateManyFromUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutFromUserInput | MessageUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutFromUserInput | MessageUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutToUserNestedInput = {
    create?: XOR<MessageCreateWithoutToUserInput, MessageUncheckedCreateWithoutToUserInput> | MessageCreateWithoutToUserInput[] | MessageUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutToUserInput | MessageCreateOrConnectWithoutToUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutToUserInput | MessageUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: MessageCreateManyToUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutToUserInput | MessageUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutToUserInput | MessageUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
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

  export type EntityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EntityCreateWithoutUserInput, EntityUncheckedCreateWithoutUserInput> | EntityCreateWithoutUserInput[] | EntityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EntityCreateOrConnectWithoutUserInput | EntityCreateOrConnectWithoutUserInput[]
    upsert?: EntityUpsertWithWhereUniqueWithoutUserInput | EntityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EntityCreateManyUserInputEnvelope
    set?: EntityWhereUniqueInput | EntityWhereUniqueInput[]
    disconnect?: EntityWhereUniqueInput | EntityWhereUniqueInput[]
    delete?: EntityWhereUniqueInput | EntityWhereUniqueInput[]
    connect?: EntityWhereUniqueInput | EntityWhereUniqueInput[]
    update?: EntityUpdateWithWhereUniqueWithoutUserInput | EntityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EntityUpdateManyWithWhereWithoutUserInput | EntityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EntityScalarWhereInput | EntityScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUserInput | ReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUserInput | ReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUserInput | ReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ReviewsCreateWithoutAuthorInput, ReviewsUncheckedCreateWithoutAuthorInput> | ReviewsCreateWithoutAuthorInput[] | ReviewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutAuthorInput | ReviewsCreateOrConnectWithoutAuthorInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutAuthorInput | ReviewsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ReviewsCreateManyAuthorInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutAuthorInput | ReviewsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutAuthorInput | ReviewsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type ViewsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ViewsCreateWithoutUserInput, ViewsUncheckedCreateWithoutUserInput> | ViewsCreateWithoutUserInput[] | ViewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewsCreateOrConnectWithoutUserInput | ViewsCreateOrConnectWithoutUserInput[]
    upsert?: ViewsUpsertWithWhereUniqueWithoutUserInput | ViewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ViewsCreateManyUserInputEnvelope
    set?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    disconnect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    delete?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    connect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    update?: ViewsUpdateWithWhereUniqueWithoutUserInput | ViewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ViewsUpdateManyWithWhereWithoutUserInput | ViewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ViewsScalarWhereInput | ViewsScalarWhereInput[]
  }

  export type FavoritesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoritesCreateWithoutUserInput, FavoritesUncheckedCreateWithoutUserInput> | FavoritesCreateWithoutUserInput[] | FavoritesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoritesCreateOrConnectWithoutUserInput | FavoritesCreateOrConnectWithoutUserInput[]
    upsert?: FavoritesUpsertWithWhereUniqueWithoutUserInput | FavoritesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoritesCreateManyUserInputEnvelope
    set?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    disconnect?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    delete?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    connect?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    update?: FavoritesUpdateWithWhereUniqueWithoutUserInput | FavoritesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoritesUpdateManyWithWhereWithoutUserInput | FavoritesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoritesScalarWhereInput | FavoritesScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<MessageCreateWithoutFromUserInput, MessageUncheckedCreateWithoutFromUserInput> | MessageCreateWithoutFromUserInput[] | MessageUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutFromUserInput | MessageCreateOrConnectWithoutFromUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutFromUserInput | MessageUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: MessageCreateManyFromUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutFromUserInput | MessageUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutFromUserInput | MessageUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutToUserNestedInput = {
    create?: XOR<MessageCreateWithoutToUserInput, MessageUncheckedCreateWithoutToUserInput> | MessageCreateWithoutToUserInput[] | MessageUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutToUserInput | MessageCreateOrConnectWithoutToUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutToUserInput | MessageUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: MessageCreateManyToUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutToUserInput | MessageUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutToUserInput | MessageUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    upsert?: UserUpsertWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedMessagesInput, UserUpdateWithoutReceivedMessagesInput>, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserCreateNestedOneWithoutEntityInput = {
    create?: XOR<UserCreateWithoutEntityInput, UserUncheckedCreateWithoutEntityInput>
    connectOrCreate?: UserCreateOrConnectWithoutEntityInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewsCreateNestedManyWithoutEntityInput = {
    create?: XOR<ReviewsCreateWithoutEntityInput, ReviewsUncheckedCreateWithoutEntityInput> | ReviewsCreateWithoutEntityInput[] | ReviewsUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutEntityInput | ReviewsCreateOrConnectWithoutEntityInput[]
    createMany?: ReviewsCreateManyEntityInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutEntityInput = {
    create?: XOR<ReviewsCreateWithoutEntityInput, ReviewsUncheckedCreateWithoutEntityInput> | ReviewsCreateWithoutEntityInput[] | ReviewsUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutEntityInput | ReviewsCreateOrConnectWithoutEntityInput[]
    createMany?: ReviewsCreateManyEntityInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutEntityNestedInput = {
    create?: XOR<UserCreateWithoutEntityInput, UserUncheckedCreateWithoutEntityInput>
    connectOrCreate?: UserCreateOrConnectWithoutEntityInput
    upsert?: UserUpsertWithoutEntityInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEntityInput, UserUpdateWithoutEntityInput>, UserUncheckedUpdateWithoutEntityInput>
  }

  export type ReviewsUpdateManyWithoutEntityNestedInput = {
    create?: XOR<ReviewsCreateWithoutEntityInput, ReviewsUncheckedCreateWithoutEntityInput> | ReviewsCreateWithoutEntityInput[] | ReviewsUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutEntityInput | ReviewsCreateOrConnectWithoutEntityInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutEntityInput | ReviewsUpsertWithWhereUniqueWithoutEntityInput[]
    createMany?: ReviewsCreateManyEntityInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutEntityInput | ReviewsUpdateWithWhereUniqueWithoutEntityInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutEntityInput | ReviewsUpdateManyWithWhereWithoutEntityInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutEntityNestedInput = {
    create?: XOR<ReviewsCreateWithoutEntityInput, ReviewsUncheckedCreateWithoutEntityInput> | ReviewsCreateWithoutEntityInput[] | ReviewsUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutEntityInput | ReviewsCreateOrConnectWithoutEntityInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutEntityInput | ReviewsUpsertWithWhereUniqueWithoutEntityInput[]
    createMany?: ReviewsCreateManyEntityInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutEntityInput | ReviewsUpdateWithWhereUniqueWithoutEntityInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutEntityInput | ReviewsUpdateManyWithWhereWithoutEntityInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type EntityCreateNestedOneWithoutReviewsInput = {
    create?: XOR<EntityCreateWithoutReviewsInput, EntityUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: EntityCreateOrConnectWithoutReviewsInput
    connect?: EntityWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewedInput = {
    create?: XOR<UserCreateWithoutReviewedInput, UserUncheckedCreateWithoutReviewedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type EntityUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<EntityCreateWithoutReviewsInput, EntityUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: EntityCreateOrConnectWithoutReviewsInput
    upsert?: EntityUpsertWithoutReviewsInput
    disconnect?: EntityWhereInput | boolean
    delete?: EntityWhereInput | boolean
    connect?: EntityWhereUniqueInput
    update?: XOR<XOR<EntityUpdateToOneWithWhereWithoutReviewsInput, EntityUpdateWithoutReviewsInput>, EntityUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutReviewedNestedInput = {
    create?: XOR<UserCreateWithoutReviewedInput, UserUncheckedCreateWithoutReviewedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewedInput
    upsert?: UserUpsertWithoutReviewedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewedInput, UserUpdateWithoutReviewedInput>, UserUncheckedUpdateWithoutReviewedInput>
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

  export type NestedEnumTransmissionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransmissionType | EnumTransmissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransmissionType[] | ListEnumTransmissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransmissionType[] | ListEnumTransmissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransmissionTypeFilter<$PrismaModel> | $Enums.TransmissionType
  }

  export type NestedEnumFuelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFuelTypeFilter<$PrismaModel> | $Enums.FuelType
  }

  export type NestedEnumBodyStyleFilter<$PrismaModel = never> = {
    equals?: $Enums.BodyStyle | EnumBodyStyleFieldRefInput<$PrismaModel>
    in?: $Enums.BodyStyle[] | ListEnumBodyStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.BodyStyle[] | ListEnumBodyStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumBodyStyleFilter<$PrismaModel> | $Enums.BodyStyle
  }

  export type NestedEnumTransmissionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransmissionType | EnumTransmissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransmissionType[] | ListEnumTransmissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransmissionType[] | ListEnumTransmissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransmissionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransmissionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransmissionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransmissionTypeFilter<$PrismaModel>
  }

  export type NestedEnumFuelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFuelTypeWithAggregatesFilter<$PrismaModel> | $Enums.FuelType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFuelTypeFilter<$PrismaModel>
    _max?: NestedEnumFuelTypeFilter<$PrismaModel>
  }

  export type NestedEnumBodyStyleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BodyStyle | EnumBodyStyleFieldRefInput<$PrismaModel>
    in?: $Enums.BodyStyle[] | ListEnumBodyStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.BodyStyle[] | ListEnumBodyStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumBodyStyleWithAggregatesFilter<$PrismaModel> | $Enums.BodyStyle
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBodyStyleFilter<$PrismaModel>
    _max?: NestedEnumBodyStyleFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CarModelCreateWithoutMakeInput = {
    name: string
    slug: string
    cars?: CarsCreateNestedManyWithoutModelInput
  }

  export type CarModelUncheckedCreateWithoutMakeInput = {
    id?: number
    name: string
    slug: string
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
    transmissionType: $Enums.TransmissionType
    fuelType: $Enums.FuelType
    bodyStyle: $Enums.BodyStyle
    engineVolume: number
    createdAt?: Date | string
    updatedAt?: Date | string
    model: CarModelCreateNestedOneWithoutCarsInput
    user: UserCreateNestedOneWithoutCarsInput
    carImages?: CarImagesCreateNestedManyWithoutCarInput
    views?: ViewsCreateNestedManyWithoutCarInput
    favorites?: FavoritesCreateNestedManyWithoutCarInput
  }

  export type CarsUncheckedCreateWithoutMakeInput = {
    id?: number
    modelId: number
    price: number
    year: number
    mileage: number
    transmissionType: $Enums.TransmissionType
    fuelType: $Enums.FuelType
    bodyStyle: $Enums.BodyStyle
    engineVolume: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    carImages?: CarImagesUncheckedCreateNestedManyWithoutCarInput
    views?: ViewsUncheckedCreateNestedManyWithoutCarInput
    favorites?: FavoritesUncheckedCreateNestedManyWithoutCarInput
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
    slug?: StringFilter<"CarModel"> | string
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
    transmissionType?: EnumTransmissionTypeFilter<"Cars"> | $Enums.TransmissionType
    fuelType?: EnumFuelTypeFilter<"Cars"> | $Enums.FuelType
    bodyStyle?: EnumBodyStyleFilter<"Cars"> | $Enums.BodyStyle
    engineVolume?: FloatFilter<"Cars"> | number
    userId?: IntFilter<"Cars"> | number
    createdAt?: DateTimeFilter<"Cars"> | Date | string
    updatedAt?: DateTimeFilter<"Cars"> | Date | string
  }

  export type CarMakeCreateWithoutModelsInput = {
    name: string
    slug: string
    countryOfOrigin?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarsCreateNestedManyWithoutMakeInput
  }

  export type CarMakeUncheckedCreateWithoutModelsInput = {
    id?: number
    name: string
    slug: string
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
    transmissionType: $Enums.TransmissionType
    fuelType: $Enums.FuelType
    bodyStyle: $Enums.BodyStyle
    engineVolume: number
    createdAt?: Date | string
    updatedAt?: Date | string
    make: CarMakeCreateNestedOneWithoutCarsInput
    user: UserCreateNestedOneWithoutCarsInput
    carImages?: CarImagesCreateNestedManyWithoutCarInput
    views?: ViewsCreateNestedManyWithoutCarInput
    favorites?: FavoritesCreateNestedManyWithoutCarInput
  }

  export type CarsUncheckedCreateWithoutModelInput = {
    id?: number
    makeId: number
    price: number
    year: number
    mileage: number
    transmissionType: $Enums.TransmissionType
    fuelType: $Enums.FuelType
    bodyStyle: $Enums.BodyStyle
    engineVolume: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    carImages?: CarImagesUncheckedCreateNestedManyWithoutCarInput
    views?: ViewsUncheckedCreateNestedManyWithoutCarInput
    favorites?: FavoritesUncheckedCreateNestedManyWithoutCarInput
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
    slug?: StringFieldUpdateOperationsInput | string
    countryOfOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarsUpdateManyWithoutMakeNestedInput
  }

  export type CarMakeUncheckedUpdateWithoutModelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
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
    slug: string
    countryOfOrigin?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: CarModelCreateNestedManyWithoutMakeInput
  }

  export type CarMakeUncheckedCreateWithoutCarsInput = {
    id?: number
    name: string
    slug: string
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
    slug: string
    make: CarMakeCreateNestedOneWithoutModelsInput
  }

  export type CarModelUncheckedCreateWithoutCarsInput = {
    id?: number
    name: string
    slug: string
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
    phone?: string | null
    role?: $Enums.Role
    isEmailConfirmed?: boolean
    isPhoneConfirmed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    entity?: EntityCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    reviewed?: ReviewsCreateNestedManyWithoutAuthorInput
    views?: ViewsCreateNestedManyWithoutUserInput
    favorites?: FavoritesCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutCarsInput = {
    id?: number
    email: string
    firstname: string
    lastname: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    isEmailConfirmed?: boolean
    isPhoneConfirmed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    entity?: EntityUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    reviewed?: ReviewsUncheckedCreateNestedManyWithoutAuthorInput
    views?: ViewsUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoritesUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutToUserInput
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

  export type ViewsCreateWithoutCarInput = {
    user?: UserCreateNestedOneWithoutViewsInput
    visitor?: VisitorsCreateNestedOneWithoutViewsInput
  }

  export type ViewsUncheckedCreateWithoutCarInput = {
    id?: number
    userId?: number | null
    visitorId?: number | null
  }

  export type ViewsCreateOrConnectWithoutCarInput = {
    where: ViewsWhereUniqueInput
    create: XOR<ViewsCreateWithoutCarInput, ViewsUncheckedCreateWithoutCarInput>
  }

  export type ViewsCreateManyCarInputEnvelope = {
    data: ViewsCreateManyCarInput | ViewsCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type FavoritesCreateWithoutCarInput = {
    user: UserCreateNestedOneWithoutFavoritesInput
  }

  export type FavoritesUncheckedCreateWithoutCarInput = {
    id?: number
    userId: number
  }

  export type FavoritesCreateOrConnectWithoutCarInput = {
    where: FavoritesWhereUniqueInput
    create: XOR<FavoritesCreateWithoutCarInput, FavoritesUncheckedCreateWithoutCarInput>
  }

  export type FavoritesCreateManyCarInputEnvelope = {
    data: FavoritesCreateManyCarInput | FavoritesCreateManyCarInput[]
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
    slug?: StringFieldUpdateOperationsInput | string
    countryOfOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: CarModelUpdateManyWithoutMakeNestedInput
  }

  export type CarMakeUncheckedUpdateWithoutCarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
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
    slug?: StringFieldUpdateOperationsInput | string
    make?: CarMakeUpdateOneRequiredWithoutModelsNestedInput
  }

  export type CarModelUncheckedUpdateWithoutCarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
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
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    isPhoneConfirmed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: EntityUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    reviewed?: ReviewsUpdateManyWithoutAuthorNestedInput
    views?: ViewsUpdateManyWithoutUserNestedInput
    favorites?: FavoritesUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    isPhoneConfirmed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: EntityUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    reviewed?: ReviewsUncheckedUpdateManyWithoutAuthorNestedInput
    views?: ViewsUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoritesUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutToUserNestedInput
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

  export type ViewsUpsertWithWhereUniqueWithoutCarInput = {
    where: ViewsWhereUniqueInput
    update: XOR<ViewsUpdateWithoutCarInput, ViewsUncheckedUpdateWithoutCarInput>
    create: XOR<ViewsCreateWithoutCarInput, ViewsUncheckedCreateWithoutCarInput>
  }

  export type ViewsUpdateWithWhereUniqueWithoutCarInput = {
    where: ViewsWhereUniqueInput
    data: XOR<ViewsUpdateWithoutCarInput, ViewsUncheckedUpdateWithoutCarInput>
  }

  export type ViewsUpdateManyWithWhereWithoutCarInput = {
    where: ViewsScalarWhereInput
    data: XOR<ViewsUpdateManyMutationInput, ViewsUncheckedUpdateManyWithoutCarInput>
  }

  export type ViewsScalarWhereInput = {
    AND?: ViewsScalarWhereInput | ViewsScalarWhereInput[]
    OR?: ViewsScalarWhereInput[]
    NOT?: ViewsScalarWhereInput | ViewsScalarWhereInput[]
    id?: IntFilter<"Views"> | number
    carId?: IntFilter<"Views"> | number
    userId?: IntNullableFilter<"Views"> | number | null
    visitorId?: IntNullableFilter<"Views"> | number | null
  }

  export type FavoritesUpsertWithWhereUniqueWithoutCarInput = {
    where: FavoritesWhereUniqueInput
    update: XOR<FavoritesUpdateWithoutCarInput, FavoritesUncheckedUpdateWithoutCarInput>
    create: XOR<FavoritesCreateWithoutCarInput, FavoritesUncheckedCreateWithoutCarInput>
  }

  export type FavoritesUpdateWithWhereUniqueWithoutCarInput = {
    where: FavoritesWhereUniqueInput
    data: XOR<FavoritesUpdateWithoutCarInput, FavoritesUncheckedUpdateWithoutCarInput>
  }

  export type FavoritesUpdateManyWithWhereWithoutCarInput = {
    where: FavoritesScalarWhereInput
    data: XOR<FavoritesUpdateManyMutationInput, FavoritesUncheckedUpdateManyWithoutCarInput>
  }

  export type FavoritesScalarWhereInput = {
    AND?: FavoritesScalarWhereInput | FavoritesScalarWhereInput[]
    OR?: FavoritesScalarWhereInput[]
    NOT?: FavoritesScalarWhereInput | FavoritesScalarWhereInput[]
    id?: IntFilter<"Favorites"> | number
    carId?: IntFilter<"Favorites"> | number
    userId?: IntFilter<"Favorites"> | number
  }

  export type CarsCreateWithoutCarImagesInput = {
    price: number
    year: number
    mileage: number
    transmissionType: $Enums.TransmissionType
    fuelType: $Enums.FuelType
    bodyStyle: $Enums.BodyStyle
    engineVolume: number
    createdAt?: Date | string
    updatedAt?: Date | string
    make: CarMakeCreateNestedOneWithoutCarsInput
    model: CarModelCreateNestedOneWithoutCarsInput
    user: UserCreateNestedOneWithoutCarsInput
    views?: ViewsCreateNestedManyWithoutCarInput
    favorites?: FavoritesCreateNestedManyWithoutCarInput
  }

  export type CarsUncheckedCreateWithoutCarImagesInput = {
    id?: number
    makeId: number
    modelId: number
    price: number
    year: number
    mileage: number
    transmissionType: $Enums.TransmissionType
    fuelType: $Enums.FuelType
    bodyStyle: $Enums.BodyStyle
    engineVolume: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    views?: ViewsUncheckedCreateNestedManyWithoutCarInput
    favorites?: FavoritesUncheckedCreateNestedManyWithoutCarInput
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
    transmissionType?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    bodyStyle?: EnumBodyStyleFieldUpdateOperationsInput | $Enums.BodyStyle
    engineVolume?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    make?: CarMakeUpdateOneRequiredWithoutCarsNestedInput
    model?: CarModelUpdateOneRequiredWithoutCarsNestedInput
    user?: UserUpdateOneRequiredWithoutCarsNestedInput
    views?: ViewsUpdateManyWithoutCarNestedInput
    favorites?: FavoritesUpdateManyWithoutCarNestedInput
  }

  export type CarsUncheckedUpdateWithoutCarImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    makeId?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    transmissionType?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    bodyStyle?: EnumBodyStyleFieldUpdateOperationsInput | $Enums.BodyStyle
    engineVolume?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: ViewsUncheckedUpdateManyWithoutCarNestedInput
    favorites?: FavoritesUncheckedUpdateManyWithoutCarNestedInput
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

  export type CarsCreateWithoutViewsInput = {
    price: number
    year: number
    mileage: number
    transmissionType: $Enums.TransmissionType
    fuelType: $Enums.FuelType
    bodyStyle: $Enums.BodyStyle
    engineVolume: number
    createdAt?: Date | string
    updatedAt?: Date | string
    make: CarMakeCreateNestedOneWithoutCarsInput
    model: CarModelCreateNestedOneWithoutCarsInput
    user: UserCreateNestedOneWithoutCarsInput
    carImages?: CarImagesCreateNestedManyWithoutCarInput
    favorites?: FavoritesCreateNestedManyWithoutCarInput
  }

  export type CarsUncheckedCreateWithoutViewsInput = {
    id?: number
    makeId: number
    modelId: number
    price: number
    year: number
    mileage: number
    transmissionType: $Enums.TransmissionType
    fuelType: $Enums.FuelType
    bodyStyle: $Enums.BodyStyle
    engineVolume: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    carImages?: CarImagesUncheckedCreateNestedManyWithoutCarInput
    favorites?: FavoritesUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarsCreateOrConnectWithoutViewsInput = {
    where: CarsWhereUniqueInput
    create: XOR<CarsCreateWithoutViewsInput, CarsUncheckedCreateWithoutViewsInput>
  }

  export type UserCreateWithoutViewsInput = {
    email: string
    firstname: string
    lastname: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    isEmailConfirmed?: boolean
    isPhoneConfirmed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarsCreateNestedManyWithoutUserInput
    entity?: EntityCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    reviewed?: ReviewsCreateNestedManyWithoutAuthorInput
    favorites?: FavoritesCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutViewsInput = {
    id?: number
    email: string
    firstname: string
    lastname: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    isEmailConfirmed?: boolean
    isPhoneConfirmed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarsUncheckedCreateNestedManyWithoutUserInput
    entity?: EntityUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    reviewed?: ReviewsUncheckedCreateNestedManyWithoutAuthorInput
    favorites?: FavoritesUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutViewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutViewsInput, UserUncheckedCreateWithoutViewsInput>
  }

  export type VisitorsCreateWithoutViewsInput = {

  }

  export type VisitorsUncheckedCreateWithoutViewsInput = {
    id?: number
  }

  export type VisitorsCreateOrConnectWithoutViewsInput = {
    where: VisitorsWhereUniqueInput
    create: XOR<VisitorsCreateWithoutViewsInput, VisitorsUncheckedCreateWithoutViewsInput>
  }

  export type CarsUpsertWithoutViewsInput = {
    update: XOR<CarsUpdateWithoutViewsInput, CarsUncheckedUpdateWithoutViewsInput>
    create: XOR<CarsCreateWithoutViewsInput, CarsUncheckedCreateWithoutViewsInput>
    where?: CarsWhereInput
  }

  export type CarsUpdateToOneWithWhereWithoutViewsInput = {
    where?: CarsWhereInput
    data: XOR<CarsUpdateWithoutViewsInput, CarsUncheckedUpdateWithoutViewsInput>
  }

  export type CarsUpdateWithoutViewsInput = {
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    transmissionType?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    bodyStyle?: EnumBodyStyleFieldUpdateOperationsInput | $Enums.BodyStyle
    engineVolume?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    make?: CarMakeUpdateOneRequiredWithoutCarsNestedInput
    model?: CarModelUpdateOneRequiredWithoutCarsNestedInput
    user?: UserUpdateOneRequiredWithoutCarsNestedInput
    carImages?: CarImagesUpdateManyWithoutCarNestedInput
    favorites?: FavoritesUpdateManyWithoutCarNestedInput
  }

  export type CarsUncheckedUpdateWithoutViewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    makeId?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    transmissionType?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    bodyStyle?: EnumBodyStyleFieldUpdateOperationsInput | $Enums.BodyStyle
    engineVolume?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carImages?: CarImagesUncheckedUpdateManyWithoutCarNestedInput
    favorites?: FavoritesUncheckedUpdateManyWithoutCarNestedInput
  }

  export type UserUpsertWithoutViewsInput = {
    update: XOR<UserUpdateWithoutViewsInput, UserUncheckedUpdateWithoutViewsInput>
    create: XOR<UserCreateWithoutViewsInput, UserUncheckedCreateWithoutViewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutViewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutViewsInput, UserUncheckedUpdateWithoutViewsInput>
  }

  export type UserUpdateWithoutViewsInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    isPhoneConfirmed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarsUpdateManyWithoutUserNestedInput
    entity?: EntityUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    reviewed?: ReviewsUpdateManyWithoutAuthorNestedInput
    favorites?: FavoritesUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutViewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    isPhoneConfirmed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarsUncheckedUpdateManyWithoutUserNestedInput
    entity?: EntityUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    reviewed?: ReviewsUncheckedUpdateManyWithoutAuthorNestedInput
    favorites?: FavoritesUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type VisitorsUpsertWithoutViewsInput = {
    update: XOR<VisitorsUpdateWithoutViewsInput, VisitorsUncheckedUpdateWithoutViewsInput>
    create: XOR<VisitorsCreateWithoutViewsInput, VisitorsUncheckedCreateWithoutViewsInput>
    where?: VisitorsWhereInput
  }

  export type VisitorsUpdateToOneWithWhereWithoutViewsInput = {
    where?: VisitorsWhereInput
    data: XOR<VisitorsUpdateWithoutViewsInput, VisitorsUncheckedUpdateWithoutViewsInput>
  }

  export type VisitorsUpdateWithoutViewsInput = {

  }

  export type VisitorsUncheckedUpdateWithoutViewsInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type ViewsCreateWithoutVisitorInput = {
    car: CarsCreateNestedOneWithoutViewsInput
    user?: UserCreateNestedOneWithoutViewsInput
  }

  export type ViewsUncheckedCreateWithoutVisitorInput = {
    id?: number
    carId: number
    userId?: number | null
  }

  export type ViewsCreateOrConnectWithoutVisitorInput = {
    where: ViewsWhereUniqueInput
    create: XOR<ViewsCreateWithoutVisitorInput, ViewsUncheckedCreateWithoutVisitorInput>
  }

  export type ViewsCreateManyVisitorInputEnvelope = {
    data: ViewsCreateManyVisitorInput | ViewsCreateManyVisitorInput[]
    skipDuplicates?: boolean
  }

  export type ViewsUpsertWithWhereUniqueWithoutVisitorInput = {
    where: ViewsWhereUniqueInput
    update: XOR<ViewsUpdateWithoutVisitorInput, ViewsUncheckedUpdateWithoutVisitorInput>
    create: XOR<ViewsCreateWithoutVisitorInput, ViewsUncheckedCreateWithoutVisitorInput>
  }

  export type ViewsUpdateWithWhereUniqueWithoutVisitorInput = {
    where: ViewsWhereUniqueInput
    data: XOR<ViewsUpdateWithoutVisitorInput, ViewsUncheckedUpdateWithoutVisitorInput>
  }

  export type ViewsUpdateManyWithWhereWithoutVisitorInput = {
    where: ViewsScalarWhereInput
    data: XOR<ViewsUpdateManyMutationInput, ViewsUncheckedUpdateManyWithoutVisitorInput>
  }

  export type CarsCreateWithoutFavoritesInput = {
    price: number
    year: number
    mileage: number
    transmissionType: $Enums.TransmissionType
    fuelType: $Enums.FuelType
    bodyStyle: $Enums.BodyStyle
    engineVolume: number
    createdAt?: Date | string
    updatedAt?: Date | string
    make: CarMakeCreateNestedOneWithoutCarsInput
    model: CarModelCreateNestedOneWithoutCarsInput
    user: UserCreateNestedOneWithoutCarsInput
    carImages?: CarImagesCreateNestedManyWithoutCarInput
    views?: ViewsCreateNestedManyWithoutCarInput
  }

  export type CarsUncheckedCreateWithoutFavoritesInput = {
    id?: number
    makeId: number
    modelId: number
    price: number
    year: number
    mileage: number
    transmissionType: $Enums.TransmissionType
    fuelType: $Enums.FuelType
    bodyStyle: $Enums.BodyStyle
    engineVolume: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    carImages?: CarImagesUncheckedCreateNestedManyWithoutCarInput
    views?: ViewsUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarsCreateOrConnectWithoutFavoritesInput = {
    where: CarsWhereUniqueInput
    create: XOR<CarsCreateWithoutFavoritesInput, CarsUncheckedCreateWithoutFavoritesInput>
  }

  export type UserCreateWithoutFavoritesInput = {
    email: string
    firstname: string
    lastname: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    isEmailConfirmed?: boolean
    isPhoneConfirmed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarsCreateNestedManyWithoutUserInput
    entity?: EntityCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    reviewed?: ReviewsCreateNestedManyWithoutAuthorInput
    views?: ViewsCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutFavoritesInput = {
    id?: number
    email: string
    firstname: string
    lastname: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    isEmailConfirmed?: boolean
    isPhoneConfirmed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarsUncheckedCreateNestedManyWithoutUserInput
    entity?: EntityUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    reviewed?: ReviewsUncheckedCreateNestedManyWithoutAuthorInput
    views?: ViewsUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutFavoritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type CarsUpsertWithoutFavoritesInput = {
    update: XOR<CarsUpdateWithoutFavoritesInput, CarsUncheckedUpdateWithoutFavoritesInput>
    create: XOR<CarsCreateWithoutFavoritesInput, CarsUncheckedCreateWithoutFavoritesInput>
    where?: CarsWhereInput
  }

  export type CarsUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: CarsWhereInput
    data: XOR<CarsUpdateWithoutFavoritesInput, CarsUncheckedUpdateWithoutFavoritesInput>
  }

  export type CarsUpdateWithoutFavoritesInput = {
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    transmissionType?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    bodyStyle?: EnumBodyStyleFieldUpdateOperationsInput | $Enums.BodyStyle
    engineVolume?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    make?: CarMakeUpdateOneRequiredWithoutCarsNestedInput
    model?: CarModelUpdateOneRequiredWithoutCarsNestedInput
    user?: UserUpdateOneRequiredWithoutCarsNestedInput
    carImages?: CarImagesUpdateManyWithoutCarNestedInput
    views?: ViewsUpdateManyWithoutCarNestedInput
  }

  export type CarsUncheckedUpdateWithoutFavoritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    makeId?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    transmissionType?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    bodyStyle?: EnumBodyStyleFieldUpdateOperationsInput | $Enums.BodyStyle
    engineVolume?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carImages?: CarImagesUncheckedUpdateManyWithoutCarNestedInput
    views?: ViewsUncheckedUpdateManyWithoutCarNestedInput
  }

  export type UserUpsertWithoutFavoritesInput = {
    update: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserUpdateWithoutFavoritesInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    isPhoneConfirmed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarsUpdateManyWithoutUserNestedInput
    entity?: EntityUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    reviewed?: ReviewsUpdateManyWithoutAuthorNestedInput
    views?: ViewsUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    isPhoneConfirmed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarsUncheckedUpdateManyWithoutUserNestedInput
    entity?: EntityUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    reviewed?: ReviewsUncheckedUpdateManyWithoutAuthorNestedInput
    views?: ViewsUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type CarsCreateWithoutUserInput = {
    price: number
    year: number
    mileage: number
    transmissionType: $Enums.TransmissionType
    fuelType: $Enums.FuelType
    bodyStyle: $Enums.BodyStyle
    engineVolume: number
    createdAt?: Date | string
    updatedAt?: Date | string
    make: CarMakeCreateNestedOneWithoutCarsInput
    model: CarModelCreateNestedOneWithoutCarsInput
    carImages?: CarImagesCreateNestedManyWithoutCarInput
    views?: ViewsCreateNestedManyWithoutCarInput
    favorites?: FavoritesCreateNestedManyWithoutCarInput
  }

  export type CarsUncheckedCreateWithoutUserInput = {
    id?: number
    makeId: number
    modelId: number
    price: number
    year: number
    mileage: number
    transmissionType: $Enums.TransmissionType
    fuelType: $Enums.FuelType
    bodyStyle: $Enums.BodyStyle
    engineVolume: number
    createdAt?: Date | string
    updatedAt?: Date | string
    carImages?: CarImagesUncheckedCreateNestedManyWithoutCarInput
    views?: ViewsUncheckedCreateNestedManyWithoutCarInput
    favorites?: FavoritesUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarsCreateOrConnectWithoutUserInput = {
    where: CarsWhereUniqueInput
    create: XOR<CarsCreateWithoutUserInput, CarsUncheckedCreateWithoutUserInput>
  }

  export type CarsCreateManyUserInputEnvelope = {
    data: CarsCreateManyUserInput | CarsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EntityCreateWithoutUserInput = {
    registrationNumber: string
    name: string
    reviews?: ReviewsCreateNestedManyWithoutEntityInput
  }

  export type EntityUncheckedCreateWithoutUserInput = {
    id?: number
    registrationNumber: string
    name: string
    reviews?: ReviewsUncheckedCreateNestedManyWithoutEntityInput
  }

  export type EntityCreateOrConnectWithoutUserInput = {
    where: EntityWhereUniqueInput
    create: XOR<EntityCreateWithoutUserInput, EntityUncheckedCreateWithoutUserInput>
  }

  export type EntityCreateManyUserInputEnvelope = {
    data: EntityCreateManyUserInput | EntityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutUserInput = {
    rate: number
    text: string
    entity?: EntityCreateNestedOneWithoutReviewsInput
    author: UserCreateNestedOneWithoutReviewedInput
  }

  export type ReviewsUncheckedCreateWithoutUserInput = {
    id?: number
    entityId?: number | null
    authorId: number
    rate: number
    text: string
  }

  export type ReviewsCreateOrConnectWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput>
  }

  export type ReviewsCreateManyUserInputEnvelope = {
    data: ReviewsCreateManyUserInput | ReviewsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutAuthorInput = {
    rate: number
    text: string
    user?: UserCreateNestedOneWithoutReviewsInput
    entity?: EntityCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutAuthorInput = {
    id?: number
    userId?: number | null
    entityId?: number | null
    rate: number
    text: string
  }

  export type ReviewsCreateOrConnectWithoutAuthorInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutAuthorInput, ReviewsUncheckedCreateWithoutAuthorInput>
  }

  export type ReviewsCreateManyAuthorInputEnvelope = {
    data: ReviewsCreateManyAuthorInput | ReviewsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ViewsCreateWithoutUserInput = {
    car: CarsCreateNestedOneWithoutViewsInput
    visitor?: VisitorsCreateNestedOneWithoutViewsInput
  }

  export type ViewsUncheckedCreateWithoutUserInput = {
    id?: number
    carId: number
    visitorId?: number | null
  }

  export type ViewsCreateOrConnectWithoutUserInput = {
    where: ViewsWhereUniqueInput
    create: XOR<ViewsCreateWithoutUserInput, ViewsUncheckedCreateWithoutUserInput>
  }

  export type ViewsCreateManyUserInputEnvelope = {
    data: ViewsCreateManyUserInput | ViewsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavoritesCreateWithoutUserInput = {
    car: CarsCreateNestedOneWithoutFavoritesInput
  }

  export type FavoritesUncheckedCreateWithoutUserInput = {
    id?: number
    carId: number
  }

  export type FavoritesCreateOrConnectWithoutUserInput = {
    where: FavoritesWhereUniqueInput
    create: XOR<FavoritesCreateWithoutUserInput, FavoritesUncheckedCreateWithoutUserInput>
  }

  export type FavoritesCreateManyUserInputEnvelope = {
    data: FavoritesCreateManyUserInput | FavoritesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutFromUserInput = {
    toUser: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateWithoutFromUserInput = {
    id?: number
    toUserId: number
  }

  export type MessageCreateOrConnectWithoutFromUserInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutFromUserInput, MessageUncheckedCreateWithoutFromUserInput>
  }

  export type MessageCreateManyFromUserInputEnvelope = {
    data: MessageCreateManyFromUserInput | MessageCreateManyFromUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutToUserInput = {
    fromUser: UserCreateNestedOneWithoutSentMessagesInput
  }

  export type MessageUncheckedCreateWithoutToUserInput = {
    id?: number
    fromUserId: number
  }

  export type MessageCreateOrConnectWithoutToUserInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutToUserInput, MessageUncheckedCreateWithoutToUserInput>
  }

  export type MessageCreateManyToUserInputEnvelope = {
    data: MessageCreateManyToUserInput | MessageCreateManyToUserInput[]
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

  export type EntityUpsertWithWhereUniqueWithoutUserInput = {
    where: EntityWhereUniqueInput
    update: XOR<EntityUpdateWithoutUserInput, EntityUncheckedUpdateWithoutUserInput>
    create: XOR<EntityCreateWithoutUserInput, EntityUncheckedCreateWithoutUserInput>
  }

  export type EntityUpdateWithWhereUniqueWithoutUserInput = {
    where: EntityWhereUniqueInput
    data: XOR<EntityUpdateWithoutUserInput, EntityUncheckedUpdateWithoutUserInput>
  }

  export type EntityUpdateManyWithWhereWithoutUserInput = {
    where: EntityScalarWhereInput
    data: XOR<EntityUpdateManyMutationInput, EntityUncheckedUpdateManyWithoutUserInput>
  }

  export type EntityScalarWhereInput = {
    AND?: EntityScalarWhereInput | EntityScalarWhereInput[]
    OR?: EntityScalarWhereInput[]
    NOT?: EntityScalarWhereInput | EntityScalarWhereInput[]
    id?: IntFilter<"Entity"> | number
    registrationNumber?: StringFilter<"Entity"> | string
    name?: StringFilter<"Entity"> | string
    userId?: IntFilter<"Entity"> | number
  }

  export type ReviewsUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutUserInput, ReviewsUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutUserInput, ReviewsUncheckedUpdateWithoutUserInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutUserInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewsScalarWhereInput = {
    AND?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    OR?: ReviewsScalarWhereInput[]
    NOT?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    id?: IntFilter<"Reviews"> | number
    userId?: IntNullableFilter<"Reviews"> | number | null
    entityId?: IntNullableFilter<"Reviews"> | number | null
    authorId?: IntFilter<"Reviews"> | number
    rate?: IntFilter<"Reviews"> | number
    text?: StringFilter<"Reviews"> | string
  }

  export type ReviewsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutAuthorInput, ReviewsUncheckedUpdateWithoutAuthorInput>
    create: XOR<ReviewsCreateWithoutAuthorInput, ReviewsUncheckedCreateWithoutAuthorInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutAuthorInput, ReviewsUncheckedUpdateWithoutAuthorInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutAuthorInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ViewsUpsertWithWhereUniqueWithoutUserInput = {
    where: ViewsWhereUniqueInput
    update: XOR<ViewsUpdateWithoutUserInput, ViewsUncheckedUpdateWithoutUserInput>
    create: XOR<ViewsCreateWithoutUserInput, ViewsUncheckedCreateWithoutUserInput>
  }

  export type ViewsUpdateWithWhereUniqueWithoutUserInput = {
    where: ViewsWhereUniqueInput
    data: XOR<ViewsUpdateWithoutUserInput, ViewsUncheckedUpdateWithoutUserInput>
  }

  export type ViewsUpdateManyWithWhereWithoutUserInput = {
    where: ViewsScalarWhereInput
    data: XOR<ViewsUpdateManyMutationInput, ViewsUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoritesUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoritesWhereUniqueInput
    update: XOR<FavoritesUpdateWithoutUserInput, FavoritesUncheckedUpdateWithoutUserInput>
    create: XOR<FavoritesCreateWithoutUserInput, FavoritesUncheckedCreateWithoutUserInput>
  }

  export type FavoritesUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoritesWhereUniqueInput
    data: XOR<FavoritesUpdateWithoutUserInput, FavoritesUncheckedUpdateWithoutUserInput>
  }

  export type FavoritesUpdateManyWithWhereWithoutUserInput = {
    where: FavoritesScalarWhereInput
    data: XOR<FavoritesUpdateManyMutationInput, FavoritesUncheckedUpdateManyWithoutUserInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutFromUserInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutFromUserInput, MessageUncheckedUpdateWithoutFromUserInput>
    create: XOR<MessageCreateWithoutFromUserInput, MessageUncheckedCreateWithoutFromUserInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutFromUserInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutFromUserInput, MessageUncheckedUpdateWithoutFromUserInput>
  }

  export type MessageUpdateManyWithWhereWithoutFromUserInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutFromUserInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    fromUserId?: IntFilter<"Message"> | number
    toUserId?: IntFilter<"Message"> | number
  }

  export type MessageUpsertWithWhereUniqueWithoutToUserInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutToUserInput, MessageUncheckedUpdateWithoutToUserInput>
    create: XOR<MessageCreateWithoutToUserInput, MessageUncheckedCreateWithoutToUserInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutToUserInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutToUserInput, MessageUncheckedUpdateWithoutToUserInput>
  }

  export type MessageUpdateManyWithWhereWithoutToUserInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutToUserInput>
  }

  export type UserCreateWithoutSentMessagesInput = {
    email: string
    firstname: string
    lastname: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    isEmailConfirmed?: boolean
    isPhoneConfirmed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarsCreateNestedManyWithoutUserInput
    entity?: EntityCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    reviewed?: ReviewsCreateNestedManyWithoutAuthorInput
    views?: ViewsCreateNestedManyWithoutUserInput
    favorites?: FavoritesCreateNestedManyWithoutUserInput
    receivedMessages?: MessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: number
    email: string
    firstname: string
    lastname: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    isEmailConfirmed?: boolean
    isPhoneConfirmed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarsUncheckedCreateNestedManyWithoutUserInput
    entity?: EntityUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    reviewed?: ReviewsUncheckedCreateNestedManyWithoutAuthorInput
    views?: ViewsUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoritesUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type UserCreateWithoutReceivedMessagesInput = {
    email: string
    firstname: string
    lastname: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    isEmailConfirmed?: boolean
    isPhoneConfirmed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarsCreateNestedManyWithoutUserInput
    entity?: EntityCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    reviewed?: ReviewsCreateNestedManyWithoutAuthorInput
    views?: ViewsCreateNestedManyWithoutUserInput
    favorites?: FavoritesCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutFromUserInput
  }

  export type UserUncheckedCreateWithoutReceivedMessagesInput = {
    id?: number
    email: string
    firstname: string
    lastname: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    isEmailConfirmed?: boolean
    isPhoneConfirmed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarsUncheckedCreateNestedManyWithoutUserInput
    entity?: EntityUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    reviewed?: ReviewsUncheckedCreateNestedManyWithoutAuthorInput
    views?: ViewsUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoritesUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutFromUserInput
  }

  export type UserCreateOrConnectWithoutReceivedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    isPhoneConfirmed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarsUpdateManyWithoutUserNestedInput
    entity?: EntityUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    reviewed?: ReviewsUpdateManyWithoutAuthorNestedInput
    views?: ViewsUpdateManyWithoutUserNestedInput
    favorites?: FavoritesUpdateManyWithoutUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    isPhoneConfirmed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarsUncheckedUpdateManyWithoutUserNestedInput
    entity?: EntityUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    reviewed?: ReviewsUncheckedUpdateManyWithoutAuthorNestedInput
    views?: ViewsUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoritesUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserUpsertWithoutReceivedMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserUpdateWithoutReceivedMessagesInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    isPhoneConfirmed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarsUpdateManyWithoutUserNestedInput
    entity?: EntityUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    reviewed?: ReviewsUpdateManyWithoutAuthorNestedInput
    views?: ViewsUpdateManyWithoutUserNestedInput
    favorites?: FavoritesUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutFromUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    isPhoneConfirmed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarsUncheckedUpdateManyWithoutUserNestedInput
    entity?: EntityUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    reviewed?: ReviewsUncheckedUpdateManyWithoutAuthorNestedInput
    views?: ViewsUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoritesUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutFromUserNestedInput
  }

  export type UserCreateWithoutEntityInput = {
    email: string
    firstname: string
    lastname: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    isEmailConfirmed?: boolean
    isPhoneConfirmed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarsCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    reviewed?: ReviewsCreateNestedManyWithoutAuthorInput
    views?: ViewsCreateNestedManyWithoutUserInput
    favorites?: FavoritesCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutEntityInput = {
    id?: number
    email: string
    firstname: string
    lastname: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    isEmailConfirmed?: boolean
    isPhoneConfirmed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarsUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    reviewed?: ReviewsUncheckedCreateNestedManyWithoutAuthorInput
    views?: ViewsUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoritesUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutEntityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEntityInput, UserUncheckedCreateWithoutEntityInput>
  }

  export type ReviewsCreateWithoutEntityInput = {
    rate: number
    text: string
    user?: UserCreateNestedOneWithoutReviewsInput
    author: UserCreateNestedOneWithoutReviewedInput
  }

  export type ReviewsUncheckedCreateWithoutEntityInput = {
    id?: number
    userId?: number | null
    authorId: number
    rate: number
    text: string
  }

  export type ReviewsCreateOrConnectWithoutEntityInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutEntityInput, ReviewsUncheckedCreateWithoutEntityInput>
  }

  export type ReviewsCreateManyEntityInputEnvelope = {
    data: ReviewsCreateManyEntityInput | ReviewsCreateManyEntityInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEntityInput = {
    update: XOR<UserUpdateWithoutEntityInput, UserUncheckedUpdateWithoutEntityInput>
    create: XOR<UserCreateWithoutEntityInput, UserUncheckedCreateWithoutEntityInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEntityInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEntityInput, UserUncheckedUpdateWithoutEntityInput>
  }

  export type UserUpdateWithoutEntityInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    isPhoneConfirmed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarsUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    reviewed?: ReviewsUpdateManyWithoutAuthorNestedInput
    views?: ViewsUpdateManyWithoutUserNestedInput
    favorites?: FavoritesUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEntityInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    isPhoneConfirmed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    reviewed?: ReviewsUncheckedUpdateManyWithoutAuthorNestedInput
    views?: ViewsUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoritesUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type ReviewsUpsertWithWhereUniqueWithoutEntityInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutEntityInput, ReviewsUncheckedUpdateWithoutEntityInput>
    create: XOR<ReviewsCreateWithoutEntityInput, ReviewsUncheckedCreateWithoutEntityInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutEntityInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutEntityInput, ReviewsUncheckedUpdateWithoutEntityInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutEntityInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutEntityInput>
  }

  export type UserCreateWithoutReviewsInput = {
    email: string
    firstname: string
    lastname: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    isEmailConfirmed?: boolean
    isPhoneConfirmed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarsCreateNestedManyWithoutUserInput
    entity?: EntityCreateNestedManyWithoutUserInput
    reviewed?: ReviewsCreateNestedManyWithoutAuthorInput
    views?: ViewsCreateNestedManyWithoutUserInput
    favorites?: FavoritesCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    email: string
    firstname: string
    lastname: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    isEmailConfirmed?: boolean
    isPhoneConfirmed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarsUncheckedCreateNestedManyWithoutUserInput
    entity?: EntityUncheckedCreateNestedManyWithoutUserInput
    reviewed?: ReviewsUncheckedCreateNestedManyWithoutAuthorInput
    views?: ViewsUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoritesUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type EntityCreateWithoutReviewsInput = {
    registrationNumber: string
    name: string
    user: UserCreateNestedOneWithoutEntityInput
  }

  export type EntityUncheckedCreateWithoutReviewsInput = {
    id?: number
    registrationNumber: string
    name: string
    userId: number
  }

  export type EntityCreateOrConnectWithoutReviewsInput = {
    where: EntityWhereUniqueInput
    create: XOR<EntityCreateWithoutReviewsInput, EntityUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewedInput = {
    email: string
    firstname: string
    lastname: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    isEmailConfirmed?: boolean
    isPhoneConfirmed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarsCreateNestedManyWithoutUserInput
    entity?: EntityCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    views?: ViewsCreateNestedManyWithoutUserInput
    favorites?: FavoritesCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutReviewedInput = {
    id?: number
    email: string
    firstname: string
    lastname: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    isEmailConfirmed?: boolean
    isPhoneConfirmed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarsUncheckedCreateNestedManyWithoutUserInput
    entity?: EntityUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    views?: ViewsUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoritesUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutReviewedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewedInput, UserUncheckedCreateWithoutReviewedInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    isPhoneConfirmed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarsUpdateManyWithoutUserNestedInput
    entity?: EntityUpdateManyWithoutUserNestedInput
    reviewed?: ReviewsUpdateManyWithoutAuthorNestedInput
    views?: ViewsUpdateManyWithoutUserNestedInput
    favorites?: FavoritesUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    isPhoneConfirmed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarsUncheckedUpdateManyWithoutUserNestedInput
    entity?: EntityUncheckedUpdateManyWithoutUserNestedInput
    reviewed?: ReviewsUncheckedUpdateManyWithoutAuthorNestedInput
    views?: ViewsUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoritesUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type EntityUpsertWithoutReviewsInput = {
    update: XOR<EntityUpdateWithoutReviewsInput, EntityUncheckedUpdateWithoutReviewsInput>
    create: XOR<EntityCreateWithoutReviewsInput, EntityUncheckedCreateWithoutReviewsInput>
    where?: EntityWhereInput
  }

  export type EntityUpdateToOneWithWhereWithoutReviewsInput = {
    where?: EntityWhereInput
    data: XOR<EntityUpdateWithoutReviewsInput, EntityUncheckedUpdateWithoutReviewsInput>
  }

  export type EntityUpdateWithoutReviewsInput = {
    registrationNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutEntityNestedInput
  }

  export type EntityUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    registrationNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutReviewedInput = {
    update: XOR<UserUpdateWithoutReviewedInput, UserUncheckedUpdateWithoutReviewedInput>
    create: XOR<UserCreateWithoutReviewedInput, UserUncheckedCreateWithoutReviewedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewedInput, UserUncheckedUpdateWithoutReviewedInput>
  }

  export type UserUpdateWithoutReviewedInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    isPhoneConfirmed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarsUpdateManyWithoutUserNestedInput
    entity?: EntityUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    views?: ViewsUpdateManyWithoutUserNestedInput
    favorites?: FavoritesUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewedInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    isPhoneConfirmed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarsUncheckedUpdateManyWithoutUserNestedInput
    entity?: EntityUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    views?: ViewsUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoritesUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutToUserNestedInput
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
    slug: string
  }

  export type CarsCreateManyMakeInput = {
    id?: number
    modelId: number
    price: number
    year: number
    mileage: number
    transmissionType: $Enums.TransmissionType
    fuelType: $Enums.FuelType
    bodyStyle: $Enums.BodyStyle
    engineVolume: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarModelUpdateWithoutMakeInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cars?: CarsUpdateManyWithoutModelNestedInput
  }

  export type CarModelUncheckedUpdateWithoutMakeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cars?: CarsUncheckedUpdateManyWithoutModelNestedInput
  }

  export type CarModelUncheckedUpdateManyWithoutMakeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type CarsUpdateWithoutMakeInput = {
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    transmissionType?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    bodyStyle?: EnumBodyStyleFieldUpdateOperationsInput | $Enums.BodyStyle
    engineVolume?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    model?: CarModelUpdateOneRequiredWithoutCarsNestedInput
    user?: UserUpdateOneRequiredWithoutCarsNestedInput
    carImages?: CarImagesUpdateManyWithoutCarNestedInput
    views?: ViewsUpdateManyWithoutCarNestedInput
    favorites?: FavoritesUpdateManyWithoutCarNestedInput
  }

  export type CarsUncheckedUpdateWithoutMakeInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    transmissionType?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    bodyStyle?: EnumBodyStyleFieldUpdateOperationsInput | $Enums.BodyStyle
    engineVolume?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carImages?: CarImagesUncheckedUpdateManyWithoutCarNestedInput
    views?: ViewsUncheckedUpdateManyWithoutCarNestedInput
    favorites?: FavoritesUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarsUncheckedUpdateManyWithoutMakeInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    transmissionType?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    bodyStyle?: EnumBodyStyleFieldUpdateOperationsInput | $Enums.BodyStyle
    engineVolume?: FloatFieldUpdateOperationsInput | number
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
    transmissionType: $Enums.TransmissionType
    fuelType: $Enums.FuelType
    bodyStyle: $Enums.BodyStyle
    engineVolume: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarsUpdateWithoutModelInput = {
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    transmissionType?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    bodyStyle?: EnumBodyStyleFieldUpdateOperationsInput | $Enums.BodyStyle
    engineVolume?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    make?: CarMakeUpdateOneRequiredWithoutCarsNestedInput
    user?: UserUpdateOneRequiredWithoutCarsNestedInput
    carImages?: CarImagesUpdateManyWithoutCarNestedInput
    views?: ViewsUpdateManyWithoutCarNestedInput
    favorites?: FavoritesUpdateManyWithoutCarNestedInput
  }

  export type CarsUncheckedUpdateWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    makeId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    transmissionType?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    bodyStyle?: EnumBodyStyleFieldUpdateOperationsInput | $Enums.BodyStyle
    engineVolume?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carImages?: CarImagesUncheckedUpdateManyWithoutCarNestedInput
    views?: ViewsUncheckedUpdateManyWithoutCarNestedInput
    favorites?: FavoritesUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarsUncheckedUpdateManyWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    makeId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    transmissionType?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    bodyStyle?: EnumBodyStyleFieldUpdateOperationsInput | $Enums.BodyStyle
    engineVolume?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarImagesCreateManyCarInput = {
    id?: number
    imageId: number
  }

  export type ViewsCreateManyCarInput = {
    id?: number
    userId?: number | null
    visitorId?: number | null
  }

  export type FavoritesCreateManyCarInput = {
    id?: number
    userId: number
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

  export type ViewsUpdateWithoutCarInput = {
    user?: UserUpdateOneWithoutViewsNestedInput
    visitor?: VisitorsUpdateOneWithoutViewsNestedInput
  }

  export type ViewsUncheckedUpdateWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    visitorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ViewsUncheckedUpdateManyWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    visitorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FavoritesUpdateWithoutCarInput = {
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoritesUncheckedUpdateWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type FavoritesUncheckedUpdateManyWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ViewsCreateManyVisitorInput = {
    id?: number
    carId: number
    userId?: number | null
  }

  export type ViewsUpdateWithoutVisitorInput = {
    car?: CarsUpdateOneRequiredWithoutViewsNestedInput
    user?: UserUpdateOneWithoutViewsNestedInput
  }

  export type ViewsUncheckedUpdateWithoutVisitorInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ViewsUncheckedUpdateManyWithoutVisitorInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CarsCreateManyUserInput = {
    id?: number
    makeId: number
    modelId: number
    price: number
    year: number
    mileage: number
    transmissionType: $Enums.TransmissionType
    fuelType: $Enums.FuelType
    bodyStyle: $Enums.BodyStyle
    engineVolume: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EntityCreateManyUserInput = {
    id?: number
    registrationNumber: string
    name: string
  }

  export type ReviewsCreateManyUserInput = {
    id?: number
    entityId?: number | null
    authorId: number
    rate: number
    text: string
  }

  export type ReviewsCreateManyAuthorInput = {
    id?: number
    userId?: number | null
    entityId?: number | null
    rate: number
    text: string
  }

  export type ViewsCreateManyUserInput = {
    id?: number
    carId: number
    visitorId?: number | null
  }

  export type FavoritesCreateManyUserInput = {
    id?: number
    carId: number
  }

  export type MessageCreateManyFromUserInput = {
    id?: number
    toUserId: number
  }

  export type MessageCreateManyToUserInput = {
    id?: number
    fromUserId: number
  }

  export type CarsUpdateWithoutUserInput = {
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    transmissionType?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    bodyStyle?: EnumBodyStyleFieldUpdateOperationsInput | $Enums.BodyStyle
    engineVolume?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    make?: CarMakeUpdateOneRequiredWithoutCarsNestedInput
    model?: CarModelUpdateOneRequiredWithoutCarsNestedInput
    carImages?: CarImagesUpdateManyWithoutCarNestedInput
    views?: ViewsUpdateManyWithoutCarNestedInput
    favorites?: FavoritesUpdateManyWithoutCarNestedInput
  }

  export type CarsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    makeId?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    transmissionType?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    bodyStyle?: EnumBodyStyleFieldUpdateOperationsInput | $Enums.BodyStyle
    engineVolume?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carImages?: CarImagesUncheckedUpdateManyWithoutCarNestedInput
    views?: ViewsUncheckedUpdateManyWithoutCarNestedInput
    favorites?: FavoritesUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    makeId?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    transmissionType?: EnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    bodyStyle?: EnumBodyStyleFieldUpdateOperationsInput | $Enums.BodyStyle
    engineVolume?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityUpdateWithoutUserInput = {
    registrationNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    reviews?: ReviewsUpdateManyWithoutEntityNestedInput
  }

  export type EntityUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    registrationNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    reviews?: ReviewsUncheckedUpdateManyWithoutEntityNestedInput
  }

  export type EntityUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    registrationNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsUpdateWithoutUserInput = {
    rate?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    entity?: EntityUpdateOneWithoutReviewsNestedInput
    author?: UserUpdateOneRequiredWithoutReviewedNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    authorId?: IntFieldUpdateOperationsInput | number
    rate?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    authorId?: IntFieldUpdateOperationsInput | number
    rate?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsUpdateWithoutAuthorInput = {
    rate?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutReviewsNestedInput
    entity?: EntityUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    rate?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    rate?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ViewsUpdateWithoutUserInput = {
    car?: CarsUpdateOneRequiredWithoutViewsNestedInput
    visitor?: VisitorsUpdateOneWithoutViewsNestedInput
  }

  export type ViewsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    visitorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ViewsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    visitorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FavoritesUpdateWithoutUserInput = {
    car?: CarsUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoritesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
  }

  export type FavoritesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUpdateWithoutFromUserInput = {
    toUser?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutFromUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUncheckedUpdateManyWithoutFromUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUpdateWithoutToUserInput = {
    fromUser?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutToUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromUserId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUncheckedUpdateManyWithoutToUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromUserId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewsCreateManyEntityInput = {
    id?: number
    userId?: number | null
    authorId: number
    rate: number
    text: string
  }

  export type ReviewsUpdateWithoutEntityInput = {
    rate?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutReviewsNestedInput
    author?: UserUpdateOneRequiredWithoutReviewedNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutEntityInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    authorId?: IntFieldUpdateOperationsInput | number
    rate?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsUncheckedUpdateManyWithoutEntityInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    authorId?: IntFieldUpdateOperationsInput | number
    rate?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
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