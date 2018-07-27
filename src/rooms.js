var fireRoomOne ={
    wallSpawns: [[5, 1],[5, 2],[5, 3],[5, 4],[5, 5],[5, 6],[5, 7],[5, 8],[5, 9],[5, 10],[5, 11],[5, 12],[5, 13],[5, 14],[5, 15],[5, 16],[5, 17],[5, 21],[5, 22],[5, 23],
        [10, 1],[10, 2],[10, 3],[10, 7],[10, 8],[10, 9],[10, 10],[10, 11],[10, 12],[10, 13],[10, 14],[10, 15],[10, 16],[10, 17],[10, 18],[10, 19],[10, 20],[10, 21],[10, 22],[10, 23],
        [14, 1],[14, 2],[14, 3],[14, 4],[14, 5],[14, 6],[14, 7],[14, 8],[14, 9],[14, 10],[14, 11],[14, 12],[14, 13],[14, 14],[14, 15],[14, 16],[14, 17],[14, 21],[14, 22],[14, 23],
        [19, 1],[19, 2],[19, 3],[19, 7],[19, 8],[19, 9],[19, 10],[19, 11],[19, 12],[19, 13],[19, 14],[19, 15],[19, 16],[19, 17],[19, 18],[19, 19],[19, 20],[19, 21],[19, 22],[19, 23]],
    monsterSpawns: [[4, 7],[4, 21],[5, 8],[5, 22],[6, 7],[6, 21],[18, 3],[18, 17],[19, 2],[19, 16],[20, 3],[20, 17]],
    fireSpawns: [],
    fireballSpawns: [[2, 9],[3, 9],[4, 9],[5, 9],[7, 15],[8, 15],[9, 15],[10, 15],
        [14, 9],[15, 9],[16, 9],[17, 9],[19, 15],[20, 15],[21, 15],[22, 15]],
    holeSpawns: [],
    spikeSpawns: [],
    buttons: [],
    teleporters: []
};

var fireRoomTwo ={
    wallSpawns:[[7, 6],[7, 18],[8, 6],[8, 18],[9, 6],[9, 18],[10, 6],[10, 18],[11, 6],[11, 18],
        [12, 6],[12, 7],[12, 8],[12, 9],[12, 10],[12, 11],[12, 12],[12, 13],[12, 14],[12, 15],[12, 16],[12, 17],[12, 18],
        [13, 6],[13, 18],[14, 6],[14, 18],[15, 6],[15, 18],[16, 6],[16, 18],[17, 6],[17, 18]],
    monsterSpawns: [[3, 9],[3, 15],[9, 7],[9, 17],[12, 5],[12, 9],[12, 15],[12, 19],[15, 7],[15, 17],[21, 9],[21, 15]],
    fireSpawns: [[5, 6],[6, 6],[6, 18],[6, 19],[18, 5],[18, 6],[18, 18],[19, 18]],
    fireballSpawns: [],
    holeSpawns: [],
    spikeSpawns: [],
    buttons: [],
    teleporters: []
};

var spikeRoomOne ={
    wallSpawns: [],
    monsterSpawns: [[2, 7],[3, 14],[3, 21],[7, 2],[12, 13],[16, 19],[17, 2],[22, 16]],
    fireSpawns: [],
    fireballSpawns: [],
    holeSpawns: [],
    spikeSpawns: [[3, 3],[3, 4],[3, 5],[3, 11],[3, 12],[3, 13],[3, 20],[3, 21],
        [4, 3],[4, 4],[4, 5],[4, 9],[4, 10],[4, 11],[4, 12],[4, 13],[4, 14],[4, 15],[4, 19],[4, 20],[4, 21],[4, 22],
        [5, 3],[5, 4],[5, 5],[5, 6],[5, 9],[5, 10],[5, 11],[5, 12],[5, 13],[5, 14],[5, 15],[5, 19],[5, 20],[5, 21],[5, 22],
        [6, 5],[6, 6],[6, 13],[6, 14],[6, 18],[6, 19],[6, 20],[6, 21],[6, 22],
        [7, 13],[7, 14],[7, 17],[7, 18],[7, 19],[7, 20],[7, 21],[7, 22],
        [8, 4],[8, 5],[8, 6],[8, 7],[8, 8],[8, 9],[8, 10],[8, 17],[8, 18],[8, 19],[8, 20],[8, 21],
        [9, 4],[9, 5],[9, 6],[9, 7],[9, 8],[9, 9],[9, 10],[9, 18],[9, 19],[9, 20],[9, 21],
        [10, 4],[10, 5],[10, 6],[10, 7],[10, 8],[10, 9],[10, 10],[10, 13],[10, 14],[10, 19],[10, 20],
        [11, 4],[11, 5],[11, 6],[11, 7],[11, 8],[11, 9],[11, 10],[11, 13],[11, 14],[11, 15],
        [12, 4],[12, 5],[12, 6],[12, 7],[12, 8],[12, 9],[12, 10],[12, 14],[12, 15],
        [13, 18],[13, 19],[13, 20],
        [14, 7],[14, 8],[14, 8],[14, 17],[14, 18],[14, 19],[14, 20],
        [15, 7],[15, 8],[15, 9],[15,10],[15, 11],[15, 12],[15, 15],[15, 16],[15, 17],[15, 18],[15, 19],[15, 20],
        [16, 3],[16, 4],[16, 7],[16, 8],[16, 9],[16, 10],[16, 11],[16, 12],[16, 15],[16, 16],[16, 17],[16, 18],
        [17, 2],[17, 3],[17, 4],[17, 7],[17, 8],[17, 9],[17, 10],[17, 11],[17, 12],[17, 15],[17, 16],[17, 17],
        [18, 2],[18, 3],[18, 7],[18, 8],[18, 9],[18, 20],[18, 21],
        [19, 20],[19, 21],
        [20, 5],[20, 6],[20, 7],[20, 8],[20, 9],[20, 10],[20, 11],[20, 12],[20, 13],[20, 14],[20, 15],[20, 18],[20, 19],[20, 20],[20, 21],
        [21, 5],[21, 6],[21, 7],[21, 8],[21, 9],[21, 10],[21, 11],[21, 12],[21, 13],[21, 14],[21, 15],[21, 18],[21, 19],[21, 20],[21, 21],
        [22, 18],[22, 19],[22, 20],[22, 21]],
    buttons: [],
    teleporters: []
};

var spikeRoomTwo ={
    wallSpawns:[[1, 1],[1, 2],[1, 3],[1, 4],[1, 5],[1, 6],[1, 7],[1, 8],[1, 9],[1, 10],[1, 14],[1, 15],[1, 16],[1, 17],[1, 18],[1, 19],[1, 20],[1, 21],[1, 22],[1, 23],
        [2, 1],[2, 2],[2, 3],[2, 4],[2, 5],[2, 6],[2, 7],[2, 8],[2, 9],[2, 10],[2, 14],[2, 15],[2, 16],[2, 17],[2, 18],[2, 19],[2, 20],[2, 21],[2, 22],[2, 23],
        [3, 1],[3, 2],[3, 3],[3, 4],[3, 5],[3, 6],[3, 7],[3, 8],[3, 9],[3, 10],[3, 14],[3, 15],[3, 16],[3, 17],[3, 18],[3, 19],[3, 20],[3, 21],[3, 22],[3, 23],
        [4, 1],[4, 2],[4, 3],[4, 4],[4, 5],[4, 6],[4, 7],[4, 8],[4, 9],[4, 15],[4, 16],[4, 17],[4, 18],[4, 19],[4, 20],[4, 21],[4, 22],[4, 23],
        [5, 1],[5, 2],[5, 3],[5, 4],[5, 5],[5, 6],[5, 7],[5, 8],[5, 16],[5, 17],[5, 18],[5, 19],[5, 20],[5, 21],[5, 22],[5, 23],
        [6, 1],[6, 2],[6, 3],[6, 4],[6, 5],[6, 6],[6, 7],[6, 17],[6, 18],[6, 19],[6, 20],[6, 21],[6, 22],[6, 23],
        [7, 1],[7, 2],[7, 3],[7, 4],[7, 5],[7, 6],[7, 18],[7, 19],[7, 20],[7, 21],[7, 22],[7, 23],
        [8, 1],[8, 2],[8, 3],[8, 4],[8, 5],[8, 19],[8, 20],[8, 21],[8, 22],[8, 23],
        [9, 1],[9, 2],[9, 3],[9, 4],[9, 20],[9, 21],[9, 22],[9, 23],
        [10, 1],[10, 2],[10, 3],[10, 21],[10, 22],[10, 23],
        [14, 1],[14, 2],[14, 3],[14, 21],[14, 22],[14, 23],
        [15, 1],[15, 2],[15, 3],[15, 4],[15, 20],[15, 21],[15, 22],[15, 23],
        [16, 1],[16, 2],[16, 3],[16, 4],[16, 5],[16, 19],[16, 20],[16, 21],[16, 22],[16, 23],
        [17, 1],[17, 2],[17, 3],[17, 4],[17, 5],[17, 6],[17, 18],[17, 19],[17, 20],[17, 21],[17, 22],[17, 23],
        [18, 1],[18, 2],[18, 3],[18, 4],[18, 5],[18, 6],[18, 7],[18, 17],[18, 18],[18, 19],[18, 20],[18, 21],[18, 22],[18, 23],
        [19, 1],[19, 2],[19, 3],[19, 4],[19, 5],[19, 6],[19, 7],[19, 8],[19, 16],[19, 17],[19, 18],[19, 19],[19, 20],[19, 21],[19, 22],[19, 23],
        [20, 1],[20, 2],[20, 3],[20, 4],[20, 5],[20, 6],[20, 7],[20, 8],[20, 9],[20, 15],[20, 16],[20, 17],[20, 18],[20, 19],[20, 20],[20, 21],[20, 22],[20, 23],
        [21, 1],[21, 2],[21, 3],[21, 4],[21, 5],[21, 6],[21, 7],[21, 8],[21, 9],[21, 10],[21, 14],[21, 15],[21,16],[21, 17],[21, 18],[21, 19],[21, 20],[21, 21],[21, 22],[21, 23],
        [22, 1],[22, 2],[22, 3],[22, 4],[22, 5],[22, 6],[22, 7],[22, 8],[22, 9],[22, 10],[22, 14],[22, 15],[22, 16],[22, 17],[22, 18],[22, 19],[22, 20],[22, 21],[22, 22],[22, 23],
        [23, 1],[23, 2],[23, 3],[23, 4],[23, 5],[23, 6],[23, 7],[23, 8],[23, 9],[23, 10],[23, 14],[23, 15],[23, 16],[23, 17],[23, 18],[23, 19],[23, 20],[23, 21],[23, 22],[23, 23]],
    monsterSpawns: [[6, 10],[6, 14],[10, 6],[10, 18],[14, 6],[14, 18],[18, 10],[18, 14]],
    fireSpawns: [],
    fireballSpawns: [],
    holeSpawns: [],
    spikeSpawns: [[7, 12],
        [8, 11],[8, 12],[8, 13],
        [9, 10],[9, 11],[9, 12],[9, 13],[9, 14],
        [10, 9],[10, 10],[10, 11],[10, 12],[10, 13],[10, 14],[10, 15],
        [11, 8],[11, 9],[11, 10],[11, 11],[11, 12],[11, 13],[11, 14],[11, 15],[11, 16],
        [12, 7],[12, 8],[12, 9],[12, 10],[12, 11],[12, 12],[12, 13],[12, 14],[12, 15],[12, 16],[12, 17],
        [13, 8],[13, 9],[13, 10],[13, 11],[13, 12],[13, 13],[13, 14],[13, 15],[13, 16],
        [14, 9],[14, 10],[14, 11],[14, 12],[14, 13],[14, 14],[14, 15],
        [15, 10],[15, 11],[15, 12],[15, 13],[15, 14],
        [16, 11],[16, 12],[16, 13],
        [17, 12]],
    buttons: [],
    teleporters: []
};

var holeRoomOne ={
    wallSpawns: [],
    monsterSpawns: [[2, 5],[2, 15],[2, 20],[3, 8],[3, 11],[4, 18],[5, 9],[5, 13],[5, 21],[6, 16],
        [7, 2],[7, 11],[7, 19],[9, 13],[9, 22],[10, 3],[10, 18],[11, 6],[12, 16],[13, 20],
        [14, 4],[14, 17],[15, 7],[15, 22],[17, 2],[17, 11],[17, 20],[18, 5],[19, 9],[19, 22],
        [20, 3],[20, 13],[21, 7],[21, 17],[22, 10],[22, 15]],
    fireSpawns: [],
    fireballSpawns: [],
    holeSpawns: [[1, 1],[1, 2],[2, 1],[2, 2],[3, 2],[3, 3],[4, 2],[4, 3],[4, 4],[4, 5],[5, 4],[5, 5],[6, 5],[6, 6],[7, 5],[7, 6],
        [7, 7],[7, 8],[8, 7],[8, 8],[9, 8],[9, 9],[10, 8],[10, 9],[10, 10],[10, 11],[11, 10],[11, 11],[12, 11],[12, 12],[13, 11],[13, 12],
        [13, 13],[13, 14],[14, 13],[14, 14],[15, 14],[15, 15],[16, 14],[16, 15],[16, 16],[16, 17],[17, 16],[17, 17],[18, 17],[18, 18],[19, 17],[19, 18],
        [19, 19],[19, 20],[20, 19],[20, 20],[21, 20],[21, 21],[22, 20],[22, 21],[22, 22],[22, 23],[23, 22],[23, 23]],
    spikeSpawns: [],
    buttons: [],
    teleporters:[[9, 15],[15, 9]]
};

var holeRoomTwo ={
    wallSpawns:[[9, 12],[12, 9],[12, 15],[15, 12]],
    monsterSpawns: [[3, 10],[6, 14],[10, 6],[10, 21],[14, 3],[14, 18],[18, 10],[21, 14]],
    fireSpawns: [],
    fireballSpawns: [],
    holeSpawns: [[1, 1],[1, 2],[1, 3],[1, 4],[1, 5],[1, 6],[1, 7],[1, 8],[1, 16],[1, 17],[1, 18],[1, 19],[1, 20],[1, 21],[1, 22],[1, 23],
        [2, 1],[2, 2],[2, 3],[2, 4],[2, 5],[2, 6],[2, 7],[2, 8],[2, 16],[2, 17],[2, 18],[2, 19],[2, 20],[2, 21],[2, 22],[2, 23],
        [3, 1],[3, 2],[3, 3],[3, 4],[3, 5],[3, 6],[3, 7],[3, 8],[3, 16],[3, 17],[3, 18],[3, 19],[3, 20],[3, 21],[3, 22],[3, 23],
        [4, 1],[4, 2],[4, 3],[4, 4],[4, 5],[4, 6],[4, 7],[4, 8],[4, 16],[4, 17],[4, 18],[4, 19],[4, 20],[4, 21],[4, 22],[4, 23],
        [5, 1],[5, 2],[5, 3],[5, 4],[5, 5],[5, 6],[5, 7],[5, 8],[5, 16],[5, 17],[5, 18],[5, 19],[5, 20],[5, 21],[5, 22],[5, 23],
        [6, 1],[6, 2],[6, 3],[6, 4],[6, 5],[6, 6],[6, 7],[6, 8],[6, 16],[6, 17],[6, 18],[6, 19],[6, 20],[6, 21],[6, 22],[6, 23],
        [7, 1],[7, 2],[7, 3],[7, 4],[7, 5],[7, 6],[7, 7],[7, 8],[7, 16],[7, 17],[7, 18],[7, 19],[7, 20],[7, 21],[7, 22],[7, 23],
        [8, 1],[8, 2],[8, 3],[8, 4],[8, 5],[8, 6],[8, 7],[8, 8],[8, 16],[8, 17],[8, 18],[8, 19],[8, 20],[8, 21],[8, 22],[8, 23],
        [16, 1],[16, 2],[16, 3],[16, 4],[16, 5],[16, 6],[16, 7],[16, 8],[16, 16],[16, 17],[16, 18],[16, 19],[16, 20],[16, 21],[16, 22],[16, 23],
        [17, 1],[17, 2],[17, 3],[17, 4],[17, 5],[17, 6],[17, 7],[17, 8],[17, 16],[17, 17],[17, 18],[17, 19],[17, 20],[17, 21],[17, 22],[17, 23],
        [18, 1],[18, 2],[18, 3],[18, 4],[18, 5],[18, 6],[18, 7],[18, 8],[18, 16],[18, 17],[18, 18],[18, 19],[18, 20],[18, 21],[18, 22],[18, 23],
        [19, 1],[19, 2],[19, 3],[19, 4],[19, 5],[19, 6],[19, 7],[19, 8],[19, 16],[19, 17],[19, 18],[19, 19],[19, 20],[19, 21],[19, 22],[19, 23],
        [20, 1],[20, 2],[20, 3],[20, 4],[20, 5],[20, 6],[20, 7],[20, 8],[20, 16],[20, 17],[20, 18],[20, 19],[20, 20],[20, 21],[20, 22],[20, 23],
        [21, 1],[21, 2],[21, 3],[21, 4],[21, 5],[21, 6],[21, 7],[21, 8],[21, 16],[21, 17],[21, 18],[21, 19],[21, 20],[21, 21],[21, 22],[21, 23],
        [22, 1],[22, 2],[22, 3],[22, 4],[22, 5],[22, 6],[22, 7],[22, 8],[22, 16],[22, 17],[22, 18],[22, 19],[22, 20],[22, 21],[22, 22],[22, 23],
        [23, 1],[23, 2],[23, 3],[23, 4],[23, 5],[23, 6],[23, 7],[23, 8],[23, 16],[23, 17],[23, 18],[23, 19],[23, 20],[23, 21],[23, 22],[23, 23]],
    spikeSpawns: [],
    buttons: [[12, 12]],
    teleporters: []
};