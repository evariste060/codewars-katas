function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
   return dna.replaceAll("T", "U");
}
console.log(DNAtoRNA("GCAT"));