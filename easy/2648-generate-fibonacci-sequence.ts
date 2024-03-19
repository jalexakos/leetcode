// from https://leetcode.com/problems/generate-fibonacci-sequence/description/

// from chatGPT
function* fibGenerator(): Generator<number, any, number> {
    let a = 0, b = 1;
    yield a;
    yield b;

    while (true) {
        const next = a + b;
        yield next;
        a = b;
        b = next;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */

// runtime 69th percentile
// memory 74th percentile