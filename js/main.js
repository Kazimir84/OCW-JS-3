// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let arr = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while

let itemWhile = 0;
while (itemWhile < arr.length) {
    console.log('itemWhile = ', arr[itemWhile]);
    itemWhile++;
};

// 2. перебрати його циклом for

for (let arrKey in arr) {
    console.log('itemFor = ', arr[arrKey]);
};

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

let itemWhileUnpaired = 0;
while (itemWhileUnpaired < arr.length) {
    let i = arr[itemWhileUnpaired];
    if (i%2 === 1) {
        console.log('itemWhileUnpaired = ', i);
    }
    itemWhileUnpaired++;
};

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let arrKey in arr) {
    let item = arr[arrKey];
    if (item % 2 === 1) {
        console.log('itemForUnpaired = ', item);
    };
};

// 5. перебрати циклом while та вивести  числа тільки парні  значення

let itemWhilePaired = 0;
while (itemWhilePaired < arr.length) {
    let i = arr[itemWhilePaired];
    if (i % 2 === 0) {
        console.log('itemWhilePaired = ', i);
    }
    itemWhilePaired++;
};

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let arrKey in arr) {
    let item = arr[arrKey];
    if (item % 2 === 0) {
        console.log('itemForPaired = ', item);
    };
};

// 7. замінити кожне число кратне 3 на слово "okten"

for (let arrKey in arr) {
    let item = arr[arrKey];
    if (item % 3 === 0) {
        item = 'OKTEN'
        console.log('itemForMultiple = ', item);
    } else {
        console.log('itemForMultiple = ', item);
    };
};

// 8. вивести масив в зворотньому порядку.

for (let arrKey = arr.length - 1; arrKey >= 0; arrKey--) {
    console.log('itemRevers1 = ', arr[arrKey]);
};

let arrRevers = arr.reverse();
for (let arrKey in arrRevers) {
    console.log('itemRevers2 = ', arrRevers[arrKey]);
};


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 7.
for (let arrKey = arr.length - 1; arrKey >= 0; arrKey--) {
    let item = arr[arrKey];
    if (item % 3 === 0) {
        item = 'OKTEN - Revers7'
        console.log('itemForMultiple = ', item);
    } else {
        console.log('itemForMultiple = ', item);
    };
};

// 6.
for (let arrKey = arr.length - 1; arrKey >= 0; arrKey--) {
    let item = arr[arrKey];
    if (item % 2 === 0) {
        console.log('itemForPairedRevers6 = ', item);
    };
};

// 5.

let itemWhilePairedRevers5 = arr.length-1;
while (itemWhilePairedRevers5 >= 0) {
    let i = arr[itemWhilePairedRevers5];
    if (i % 2 === 0) {
        console.log('itemWhilePairedRevers5 = ', i);
    }
    itemWhilePairedRevers5--;
};

// 4.

for (let arrKey = arr.length - 1; arrKey >= 0; arrKey--) {
    let item = arr[arrKey];
    if (!!(item % 2)) {
        console.log('itemForMultipleRevers4 = ', item);
    };
};

// 3.

let itemWhileUnpairedRevers3 = arr.length-1;
while (itemWhileUnpairedRevers3 >= 0) {
    let i = arr[itemWhileUnpairedRevers3];
    if (!!(i % 2)) {
        console.log('itemWhileUnpairedRevers3 = ', i);
    }
    itemWhileUnpairedRevers3--;
};

// 2.

for (let arrKey = arr.length - 1; arrKey >= 0; arrKey--) {
    console.log('itemForRevers2 = ', arr[arrKey]);
};

// 1.

let itemWhileRevers1 = arr.length-1;
while (itemWhileRevers1 >= 0) {
    console.log('itemWhileRevers1 = ', arr[itemWhileRevers1]);
    itemWhileRevers1--;
};