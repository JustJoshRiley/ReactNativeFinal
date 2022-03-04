import data from './metal.json';

const getBands = () => {
    const arr = []
    for(let band = 0; band < data.length; band += 1) {
        arr.push(data[band])

    }
    console.log(arr)
    return arr
}

const metalBands = getBands()

export{metalBands}