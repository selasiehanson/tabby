export const leftPad = (originalText, padddingChar, padLength) => {
    return Array(padLength - originalText.length + 1).join(padddingChar) + originalText
}
