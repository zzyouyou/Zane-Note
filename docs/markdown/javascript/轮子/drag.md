# 实现拖拽

如下：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        display: flex;
      }

      .item {
        width: 300px;
        height: 100px;
        background-color: rgb(237, 241, 241);
        border: 1px #000 solid;
        margin-bottom: 10px;
      }

      #dropzone {
        width: 300px;
        padding: 0 20px;
        height: 1000px;
        margin-bottom: 10px;
        border: 1px #000 solid;
      }
    </style>
  </head>

  <body>
    <div class="box">
      <div id="draggableElement" draggable="true">可拖拽的元素</div>
      <div id="dropzone">拖放区域</div>
    </div>

    <script>
      const draggableElement = document.getElementById("draggableElement");

      draggableElement.addEventListener("dragstart", (event) => {
        // 设置要传输的数据（这里传输元素的ID）
        event.dataTransfer.setData("text/plain", draggableElement.id);
        console.log("event: ", event);
      });
      const dropzone = document.getElementById("dropzone");

      dropzone.addEventListener("dragover", (event) => {
        event.preventDefault(); // 阻止默认的拖拽行为
      });

      dropzone.addEventListener("drop", (event) => {
        console.log("event: ", event);
        event.preventDefault(); // 阻止默认的拖拽行为

        // 获取传输的数据（这里是元素的ID）
        const draggedElementId = event.dataTransfer.getData("text/plain");
        console.log(
          "event.dataTransfer.getData ",
          event.dataTransfer.getData("text/plain")
        );

        // 执行放置操作（例如移动元素到放置区域）
        const draggedElement = document.getElementById(draggedElementId);
        dropzone.appendChild(draggedElement);
      });
    </script>
  </body>
</html>
```
