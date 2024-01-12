function calcAvg() {
    //scope
    console.log("bat dau tinh diem chuong trinh");
    // tim toi the input co id la avg1
    // let, const
    // let giup minh khai bao 1 tieng va co the cap nhat gia tri
    // const khai bo 1 hang so (khong update dc gia tri)
    
    const scoreElement = document.getElementById("score");
    const resultElement = document.getElementById("result");

    const avg1Element = document.getElementById("avg1");
    const avg1 = Number(avg1Element.value);
    
    const avg2Element = document.getElementById("avg2");
    const avg2 = Number(avg2Element.value)// chuyen kieu du lieu string qua number
    
    
    const avg = (avg1 +avg2 * 2) / 3;

    console.log("avg" + avg);

    resultElement.style.display = "block";

    // cap nhat lai ga tri

    scoreElement.textContent = avg.toFixed(1);

}