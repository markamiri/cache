"use server";

import { ID } from "node-appwrite";
import { createSessionClient } from "../appwrite";
import { createAdminClient } from "../appwrite";
import { cookies } from "next/dist/client/components/headers";
import { parseStringify } from "../utils";

export const signIn = async () => {
  try {
    //mutation, modify database, fetch
  } catch (error) {
    console.error("error", error);
  }
};

export const signUp = async (userData: SignUpParams) => {
  const { email, password, firstName, lastName } = userData;

  try {
    const { account } = await createAdminClient();

    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUserAccount);
  } catch (error) {
    console.error("error", error);
  }
};

// ... your initilization functions

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}
