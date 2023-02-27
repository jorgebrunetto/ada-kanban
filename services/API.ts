import { APIProps } from "types/ApiType";

export default async function API({ resource, method, token, body }: APIProps) {
  const res = await fetch(`${process.env.API_URL}/${resource}/`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  return data;
}
