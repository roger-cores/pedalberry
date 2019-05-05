ileftof(I1, I2):-intersection(I1), intersection(I2), road(R), westend(R,I1), eaststart(R,I2).
ileftof(I1, I2):-intersection(I1), intersection(I2), road(R), weststart(R,I1), eastend(R,I2).
