import { cards } from "@flesh-and-blood/cards";
import { writeFileSync, mkdirSync } from "fs";

const omensCards = cards.filter((card) =>
    card.printings.some((printing) => printing.identifier.startsWith("OMN")) &&
    !card.printings.some((printing) => printing.isExpansionSlot === true) &&
    !card.types.some((type) => ["Equipment", "Hero"].includes(type)) &&
    !card.rarities.includes("Basic")
);

omensCards.forEach((card) => console.log(card));
const omensCardsSlim = omensCards.map(({ cardIdentifier, name, rarity, types, subtypes, defaultImage, classes, cost, defense, functionalText, pitch, power }) =>
    ({ cardIdentifier, name, rarity, types, subtypes, defaultImage, classes, cost, defense, functionalText, pitch, power })
);
mkdirSync("sets", { recursive: true });
writeFileSync("sets/OMN.json", JSON.stringify(omensCardsSlim, null, 2));