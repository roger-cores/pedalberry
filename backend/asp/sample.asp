intersection(i1..4).
lane(l1..4).
road(r1..4).
parkspot(p1..2).

% parkspot 1 to left of road 1
pleftof(p1, r1).

% Lane 1 and 2 are on road 1
inroad(l1..2, r1).

% Lane 3 and 4 are on road 2
inroad(l3..4, r2).

leftof(l1,l2).
leftof(l3,l4).

% l1 and l2 westend -> i1 eaststart
westend(r1, i1).
eaststart(r1,i2).

% l3 and l4 westend -> i1 eastend
weststart(r2, i1).
eastend(r2,i2).


northstart(r3,i3).
southend(r3,i2).

northend(r4,i2).
southstart(r4,i4).
