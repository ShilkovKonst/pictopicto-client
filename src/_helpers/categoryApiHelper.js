import { BASE_URL } from "@/_constants/url";

const REVALIDATE = 0;

// find all categories as pages for dashboard
export async function getAll(pageNo, listSize, isSeance) {
  const res = await fetch(
    `${BASE_URL}/categories?page=${pageNo}&size=${listSize}&isSeance=${isSeance}`,
    { next: { revalidate: REVALIDATE, tags: ["categories"] } }
  ).catch((e) => {
    throw new Error("Failed to fetch data: " + e.message);
  });
  return res.json();
}

// find all categories as one list
export async function getAllAsList() {
  const res = await fetch(`${BASE_URL}/categories?isSeance=true`, {
    next: { revalidate: REVALIDATE },
  }).catch((e) => {
    throw new Error("Failed to fetch data: " + e.message);
  });
  return res.json();
}

export async function getOneById(id) {
  const res = await fetch(`${BASE_URL}/categories/${id}`, {
    next: { revalidate: REVALIDATE },
  }).catch((e) => {
    throw new Error("Failed to fetch data: " + e.message);
  });
  return res.json();
}

// find all subcategories
export async function getAllBySupercategory(id) {
  const res = await fetch(`${BASE_URL}/categories/${id}/subcategories`, {
    next: { revalidate: REVALIDATE },
  }).catch((e) => {
    throw new Error("Failed to fetch data: " + e.message);
  });
  return res.json();
}

export async function createOne(data) {
  console.log(data);
  const res = await fetch(`${BASE_URL}/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((e) => {
    throw new Error("Failed to create data: " + e.message);
  });
  return res.json();
}

export async function updateOneById(id, data) {
  const res = await fetch(`${BASE_URL}/categories/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((e) => {
    throw new Error("Failed to update data: " + e.message);
  });
  return res.json();
}

export async function deleteOneById(id) {
  const res = await fetch(`${BASE_URL}/categories/${id}`, {
    method: "DELETE",
  }).catch((e) => {
    throw new Error("Failed to delete data: " + e.message);
  });
  return res.status;
}
