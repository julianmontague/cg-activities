import {sortMatrix} from './solution'


const MATRIX = [
    [[3,5,2], [4,6,2], [4,6,7]],
    [[4,6,2], [7,4,7], [5,3,6]],
    [[8,4,7], [4,3,1], [7,5,3]]
]

test('that sortMatrix sorts matrix correctly', () => {
    const expected = [
        [[4, 3, 1], [3, 5, 2], [4, 6, 2]],
        [[4, 6, 2], [5, 3, 6], [7, 5, 3]],
        [[4, 6, 7], [7, 4, 7], [8, 4, 7]]
    ]

    return expect(sortMatrix(MATRIX).toString()).toEqual(expected.toString())
})

