
export const newsCategories = async() => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const result = await res.json();

  return result.data;
}

export const newsPageCategory = async(id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
  const result = await res.json();

  return result.data;
}

export const newsDetails = async(id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`);
  const result = await res.json();

  return result.data[0];
}