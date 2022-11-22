function gcd(a, b) {
    if (!b) return a
    return gcd(b, a % b)
}

console.log(gcd(15, 3))

test = 124

function test() {
    uid = 56
}