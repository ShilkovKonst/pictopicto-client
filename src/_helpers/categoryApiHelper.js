import { BASE_URL } from "@/_constants/url";

const REVALIDATE = 0;

// find all categories as pages for dashboard
export const getAll = async (pageNo, listSize, isSeance) => {
  try {
    const res = await fetch(
      `${BASE_URL}/categories?page=${pageNo}&size=${listSize}&isSeance=${isSeance}`,
      { next: { revalidate: REVALIDATE } }
    );
    if (res.ok) {
      const body = await res.json();
      console.log(body);
      return body
    }
  } catch (error) {
    console.error("Error fetching categories:", error.message);
  }
};

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

export async function createOne(body) {
  console.log(body);
  const res = await fetch(`${BASE_URL}/categories`, {
    method: "POST",
    body: body,
  }).catch((e) => {
    throw new Error("Failed to create data: " + e.message);
  });
  if (!res.ok) {
    const errorDetails = await res.json();
    throw new Error(`${errorDetails.message}`);
  }
  return res.json();
}

export async function updateOneById(id, body) {
  console.log(body.get("imageFile"));
  const res = await fetch(`${BASE_URL}/categories/${id}`, {
    method: "PUT",
    body: body,
  }).catch((e) => {
    throw new Error("Failed to update data: " + e.message);
  });
  if (!res.ok) {
    const errorDetails = await res.json();
    throw new Error(`${errorDetails.message}`);
  }
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

// category media management
export async function createOneMedia(data) {
  console.log(data);
  const res = await fetch(`${BASE_URL}/categories/media`, {
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

export async function deleteOneMediaById(id) {
  console.log(data);
  const res = await fetch(`${BASE_URL}/categories/media/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((e) => {
    throw new Error("Failed to create data: " + e.message);
  });
  return res.json();
}

export const getOneMediaFile = async (id, setImageSrc) => {
  try {
    const response = await fetch(`${BASE_URL}/categories/${id}/image`);
    if (response.ok) {
      const blob = await response.blob();
      const objectURL = URL.createObjectURL(blob);
      setImageSrc && setImageSrc(objectURL);
    } else {
      console.error("Failed to fetch image");
    }
  } catch (error) {
    console.error("Error fetching image:", error);
  }
};
