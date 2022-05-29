export const getSakacilURL = async (cn) => {
  const url = "https://sakacil.com/getDetailUrlFromCorporationNo.php?cn=" + cn;
  const res = await (await fetch(url)).text();
  return res;
};
