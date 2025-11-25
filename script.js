function showContent(type) {
    const title = document.getElementById("title");
    const text = document.getElementById("text");

    const today = new Date();
    const dateText = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;

    // 仮の天気と気温（自分で好きに変更OK）
    const weather = "晴れ";
    const temp = 18; // ←気温（好きに変えてOK）

    let drink = "";
    if (temp >= 25) {
        drink = "おすすめの飲み物：アイスコーヒー";
    } else if (temp >= 15) {
        drink = "おすすめの飲み物：あたたかい紅茶";
    } else {
        drink = "おすすめの飲み物：ホットココア";
    }

    if (type === "date") {
        title.textContent = "今日の日付";
        text.textContent = dateText;
    } 
    else if (type === "weather") {
        title.textContent = "今日の天気";
        text.textContent = weather;
    } 
    else if (type === "temp") {
        title.textContent = "今日の気温";
        text.textContent = temp + "℃";
    } 
    else if (type === "drink") {
        title.textContent = "おすすめの飲み物";
        text.textContent = drink;
    }
}