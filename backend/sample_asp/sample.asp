intersection(i1..2).
lane(l1..2).
road(r1..2).

% Lane 1 and 2 are on road 1
inroad(l1..2,r1).

leftof(l1,l2).

% l1 and l2 westend -> i1 eaststart
westend(l1..2,i1).
