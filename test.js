describe ('Проверка готовности кофеварки', () => {
    it('удельная теплоемкость воды верная для варки кофе', () => {
        assert.equal(waterHeatCapacity, 4200);
    });

    it('температура воды до которой греем верная', () => {
        assert.equal(maxTemp, 90);
    });

})

describe('Проверка кол-ва воды', function(){
    this.timeout(20000);
  
    it('Проверка кол-ва воды прошла успешно', function(done){
        assert.equal(vitek.fillWater(), waterAmount);
        setTimeout(done, 1000);
    });
  
  })


describe('Проверка кол-ва зерен', function(){
    this.timeout(30000);
  
    it('Проверка кол-ва зерен прошла успешно', function(done){
        assert.equal(vitek.fillBeans(), beans);
        setTimeout(done, 1000);
    });
  
  })