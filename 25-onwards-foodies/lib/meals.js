import fs from 'node:fs';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error('Loading meals failed.');
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extention = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extention}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferdImage = await meal.image.arrayBuffer();
  
  stream.write(Buffer.from(bufferdImage), (error) => {
    if (error) {
      throw new Error('Failed to save image.');
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(`
    INSERT INTO meals (title, summary, instructions, image, creator, creator_email, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @image,
      @creator,
      @creator_email,
      @slug
    )
  `).run(meal);
}
