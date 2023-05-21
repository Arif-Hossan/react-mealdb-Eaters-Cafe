export const CategoryLoader =async () =>{
    const foodsCategoryData = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const foodsCategory = foodsCategoryData.json();
    return foodsCategory;
}