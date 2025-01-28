import { JSONPath } from '@astronautlabs/jsonpath';
import {
  USER_ADDRESS_PARAM_DEFAULT,
  USER_ADDRESS_PARAM_EIP1271,
  USER_ADDRESS_PARAM_EXTERNAL_EIP4361,
} from '@nucypher/taco-auth';
import { Primitive, z, ZodLiteral } from 'zod';

import { CONTEXT_PARAM_PREFIX, CONTEXT_PARAM_REGEXP } from '../const';

// We want to discriminate between ContextParams and plain strings
// If a string starts with `:`, it's a ContextParam
export const plainStringSchema = z.string().refine(
  (str) => {
    return !str.startsWith(CONTEXT_PARAM_PREFIX);
  },
  {
    message: `String must not be a context parameter i.e. not start with "${CONTEXT_PARAM_PREFIX}"`,
  },
);

export const UserAddressSchema = z.enum([
  USER_ADDRESS_PARAM_DEFAULT,
  USER_ADDRESS_PARAM_EIP1271,
  USER_ADDRESS_PARAM_EXTERNAL_EIP4361,
]);

export const baseConditionSchema = z.object({
  conditionType: z.string(),
});

// Source: https://github.com/colinhacks/zod/issues/831#issuecomment-1063481764
const createUnion = <
  T extends Readonly<[Primitive, Primitive, ...Primitive[]]>,
>(
  values: T,
) => {
  const zodLiterals = values.map((value) => z.literal(value)) as unknown as [
    ZodLiteral<Primitive>,
    ZodLiteral<Primitive>,
    ...ZodLiteral<Primitive>[],
  ];
  return z.union(zodLiterals);
};

function createUnionSchema<T extends readonly Primitive[]>(values: T) {
  if (values.length === 0) {
    return z.never();
  }

  if (values.length === 1) {
    return z.literal(values[0]);
  }

  return createUnion(
    values as unknown as Readonly<[Primitive, Primitive, ...Primitive[]]>,
  );
}

export default createUnionSchema;

const validateJSONPath = (jsonPath: string): boolean => {
  // account for embedded context variables
  if (CONTEXT_PARAM_REGEXP.test(jsonPath)) {
    // skip validation
    return true;
  }

  try {
    JSONPath.parse(jsonPath);
    return true;
  } catch (error) {
    return false;
  }
};

export const jsonPathSchema = z
  .string()
  .refine((val) => validateJSONPath(val), {
    message: 'Invalid JSONPath expression',
  });

const validateHttpsURL = (url: string): boolean => {
  return URL.canParse(url) && url.startsWith('https://');
};

// Use our own URL refinement check due to https://github.com/colinhacks/zod/issues/2236
export const httpsURLSchema = z
  .string()
  .url()
  .refine((url) => validateHttpsURL(url), {
    message: 'Invalid URL',
  });
