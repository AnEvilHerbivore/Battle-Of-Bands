let bNum = 0;

function bandOrder (bName) {
    bNum += 1;
    let entry = `${bNum}. ${bName}`;
    return entry;
}

console.log(bandOrder("Creature Comfort"));
console.log(bandOrder("Other Band"));