import schemas from '../schemas';

const runSchema = async (schemaName: string, toBeValidated: unknown) => {
  const response = await schemas[schemaName].validateAsync(toBeValidated);
  return response;
};

export default runSchema;
