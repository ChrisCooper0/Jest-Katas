function remove(s: string): string {
  return s.replace(/!$/, "");
}

module.exports = remove;
