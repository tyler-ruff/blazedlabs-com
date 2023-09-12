export function estimateReadTime(text: string, wordsPerMinute: number = 200): string {
    // Calculate the number of words in the text
    const wordCount = text.split(/\s+/).length;
  
    // Calculate the estimated read time in minutes
    const readTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  
    // Format the read time as a string
    if (readTimeMinutes === 1) {
      return '1 minute';
    } else {
      return `${readTimeMinutes} minutes`;
    }
}