
export const useVersion = () => {
  return useState<string>('version', () => useDefaultVersion().value)
}

export const useDefaultVersion = () => {
  const version = ref('1.1.1')
  return version
}
