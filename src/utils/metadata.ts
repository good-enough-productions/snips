export async function extractMetadata(url: string) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    return {
      title: doc.querySelector('title')?.textContent || '',
      description: doc.querySelector('meta[name="description"]')?.getAttribute('content') || '',
    };
  } catch (error) {
    console.error('Error extracting metadata:', error);
    return {
      title: '',
      description: '',
    };
  }
}