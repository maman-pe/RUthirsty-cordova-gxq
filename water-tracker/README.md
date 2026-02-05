# 喝水打卡应用

一个简洁美观的Cordova喝水打卡应用，帮助你养成良好的喝水习惯。

## 功能特点

- ✅ 一键打卡记录喝水时间
- 📊 实时显示今日喝水次数
- 📝 完整的喝水记录列表
- 💾 本地存储，数据持久化
- 🌙 支持深色模式
- 📱 完美适配Android设备

## 应用截图说明

应用包含以下界面元素：
- **顶部区域**：显示"今日已喝水X次"的统计信息
- **中间区域**：大型圆形打卡按钮，点击即可记录
- **底部区域**：今日喝水记录列表，显示每次喝水的具体时间

## 技术栈

- Apache Cordova
- HTML5 + CSS3 + JavaScript
- LocalStorage 数据持久化

## 环境要求

- Node.js (已安装)
- Cordova CLI (已安装)
- Android SDK (需要配置)
- Java JDK 8 或更高版本

## 安装和构建

### 1. 安装Android SDK

如果还没有安装Android SDK，请按以下步骤操作：

```bash
# 下载Android Command Line Tools
# 访问: https://developer.android.com/studio#command-tools

# 设置环境变量
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
```

### 2. 构建应用

```bash
# 进入项目目录
cd water-tracker

# 构建Android应用
cordova build android

# 或者直接运行到连接的设备
cordova run android
```

### 3. 生成APK

构建完成后，APK文件位于：
```
platforms/android/app/build/outputs/apk/debug/app-debug.apk
```

## 在浏览器中测试

虽然某些Cordova功能在浏览器中不可用，但你可以快速预览界面：

```bash
# 启动本地服务器
cordova serve

# 然后在浏览器中访问
# http://localhost:8000
```

## 使用说明

1. **打卡**：点击中间的蓝色圆形按钮即可记录当前时间的喝水记录
2. **查看记录**：底部列表会显示今日所有的喝水记录，包括具体时间
3. **统计信息**：顶部会实时显示今日已喝水的总次数
4. **自动重置**：每天零点后首次打开应用，会自动清空前一天的记录

## 数据存储

应用使用LocalStorage存储数据：
- `waterRecords`: 存储今日所有打卡记录
- `lastDate`: 存储最后一次打卡的日期，用于判断是否需要重置

数据会在每天自动重置，只保留当天的记录。

## 项目结构

```
water-tracker/
├── www/
│   ├── css/
│   │   └── index.css          # 应用样式
│   ├── js/
│   │   └── index.js           # 应用逻辑
│   ├── index.html             # 主界面
│   └── img/                   # 图片资源
├── platforms/
│   └── android/               # Android平台文件
├── config.xml                 # Cordova配置
└── package.json              # 项目依赖
```

## 自定义配置

你可以在 `config.xml` 中修改应用的基本信息：

```xml
<widget id="com.example.watertracker" version="1.0.0">
    <name>喝水打卡</name>
    <description>帮助你养成良好喝水习惯的打卡应用</description>
    <author email="your@email.com">Your Name</author>
</widget>
```

## 常见问题

### Q: 为什么构建失败？
A: 请确保已正确安装和配置Android SDK，并设置了ANDROID_HOME环境变量。

### Q: 数据会丢失吗？
A: 数据存储在设备本地，除非卸载应用或清除应用数据，否则不会丢失。每天的记录会在第二天自动清空。

### Q: 可以修改界面颜色吗？
A: 可以，编辑 `www/css/index.css` 文件中的渐变色值即可自定义界面颜色。

## 开发者

使用 Claude Code 开发
