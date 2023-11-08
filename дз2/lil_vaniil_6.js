function landPerimeter(arr) {
    let islands = 0;
    let n = 0;

    let grid = arr.map(el => el.split(''));
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length - 1; j++) {
            if (grid[i][j] == 'X') {
                islands++;
                if (i < grid.length - 1 && grid[i + 1][j] == 'X') n++;
                if (j < grid[i].length - 1 && grid[i][j + 1] == 'X') n++;
            }
        }
    }

    return islands * 4 - n * 2;
}

console.log(landPerimeter(['XOOXO',
'XOOXO',
'OOOXO',
'XXOXO',
'OXOOO']));

console.log(landPerimeter(['XOOO',
'XOXO',
'XOXO',
'OOXX',
'OOOO']));