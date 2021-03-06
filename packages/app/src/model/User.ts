import { Resource } from '@ursa/core';

@Resource('Ursa', 18)
export default class User {
    constructor(
        readonly name: string,
        readonly age: number,
    ) {}

    getAge() {
        return this.age;
    }
}