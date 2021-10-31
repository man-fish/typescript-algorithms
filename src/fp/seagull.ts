namespace OOP {
    export class Flock {
        seagull: number;
        constructor(n: number) {
            this.seagull = n;
        }
        conjoin(other: Flock) {
            this.seagull = this.seagull + other.seagull;
            return this;
        }
        breed(other: Flock) {
            this.seagull = this.seagull * other.seagull;
            return this;
        }
    }

    const flock_a = new Flock(4);
    const flock_b = new Flock(2);
    const flock_c = new Flock(3);

    let result = flock_a.breed(flock_c).conjoin(flock_a.breed(flock_b)).seagull;
    console.log(result);
}

namespace FP {
    type Flock = number;

    function conjoin(flock_x: Flock, flock_y: Flock): Flock {
        return flock_x + flock_y;
    }

    function breed(flock_x: Flock, flock_y: Flock): Flock {
        return flock_x * flock_y;
    }

    const flock_a = 4;
    const flock_b = 2;
    const flock_c = 3;

    let res = conjoin(breed(flock_a, flock_b), breed(flock_a, flock_c));
    res = breed(flock_a, conjoin(flock_b, flock_c));
    console.log(res);
}
