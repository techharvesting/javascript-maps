const map = new Map()

map.set(3, 'naseel')
map.set(4, 'something')
map.set(8, 'javascript')
map.set('hello', 'bye')

map.delete(8)
map.delete('hello')

console.log(map)