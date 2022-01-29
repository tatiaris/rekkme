import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const findOneObject = async (collection: string, query) => {
  try {
    await prisma.$connect();
    const object = await prisma[collection].findFirst({ where: query });
    await prisma.$disconnect();
    return object;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const findMultipleObjects = async (collection: string, query) => {
  try {
    await prisma.$connect();
    const object = await prisma[collection].findMany({ where: query });
    await prisma.$disconnect();
    return object;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const insertOneObject = async (collection: string, newObject) => {
  try {
    await prisma.$connect();
    await prisma[collection].create({ data: newObject });
    await prisma.$disconnect();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateOneObject = async (collection: string, query, updatedObj, upsert = true) => {
  try {
    await prisma.$connect();
    await prisma[collection].update({ where: query, data: updatedObj });
    await prisma.$disconnect();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAllObjects = async (collection: string) => {
  try {
    await prisma.$connect();
    const allUsers = await prisma[collection].findMany();
    await prisma.$disconnect();
    return allUsers;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteOneObject = async (collection: string, query) => {
  try {
    await prisma.$connect();
    await prisma[collection].delete({ where: query });
    await prisma.$disconnect();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
