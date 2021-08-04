import { promises as fs } from 'fs';

class I18nChecker {

  public static async justDoIt(): Promise<void> {
    const contentEN = await fs.readFile('./src/assets/i18n/en.json', 'utf8');
    const parsedContentEN = JSON.parse(contentEN);
    console.log(parsedContentEN);
  }
}

// Start
I18nChecker.justDoIt().catch((error) => {
  console.log(error.message);
});
