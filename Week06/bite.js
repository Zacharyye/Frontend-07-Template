/**
 * 修改前
 */
class Dog {
  bite(obj) {
    console.log("咬了" + obj.name);
  }  
}

class People {
  constructor(name) {
    this.name = name;
  }
  bitten(animal) {
    console.log("被" + animal + "咬了");
  }
}
new Dog().bite(new People("zzz"));

/**
 * 修改后
 */
class Dog2 {
  constructor(name, attackNum) {
    this.name = name;
    this.attackNum = attackNum;
  }
  attack() {
    console.log(this.name + "进行了攻击，攻击力：" + this.attackNum);
    return this.attackNum;
  }
}

class People2 {
  constructor(name) {
    this.name = name;
    this.life = 100;
  }
  hurt(damage) {
    console.log(this.name + "被伤了，受伤程度：" + damage);
    this.life -= damage;
    return this;
  }
  getLife() {
    return this.life;
  }
}
console.log(new People2("zzz").hurt(new Dog2("汪汪", 20).attack()).getLife());