export type Product = {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: "لوحات" | "حساسات" | "مكونات" | "محركات"
}

export const WHATSAPP_NUMBER = "9647832213080"

export const products: Product[] = [
  {
    id: "orange-pi-5-plus",
    name: "Orange Pi 5 Plus 16GB",
    description: "حاسبة لوحية قوية بذاكرة 16GB ومعالج ثماني النواة لمشاريع الذكاء الاصطناعي والأنظمة المدمجة.",
    price: 270000,
    image: "/products/orange-pi-5-plus.png",
    category: "لوحات",
  },
  {
    id: "esp32-s3-n16r8",
    name: "ESP32-S3 N16R8",
    description: "متحكم قوي مع WiFi و Bluetooth، ذاكرة فلاش 16MB و PSRAM 8MB لمشاريع إنترنت الأشياء.",
    price: 16000,
    image: "/products/esp32-s3.png",
    category: "لوحات",
  },
  {
    id: "arduino-uno",
    name: "أردوينو Uno",
    description: "لوحة تحكم متكاملة R3 مثالية لجميع مشاريع الإلكترونيات والبرمجة.",
    price: 7000,
    image: "/products/arduino-uno.png",
    category: "لوحات",
  },
  {
    id: "breadboard",
    name: "بريدبورد",
    description: "لوحة تجارب بدون لحام لتوصيل الدوائر الإلكترونية بسهولة.",
    price: 3000,
    image: "/products/breadboard.png",
    category: "مكونات",
  },
  {
    id: "lcd-i2c",
    name: "شاشة LCD I2C",
    description: "شاشة عرض 16×2 مع وحدة I2C لتوفير منافذ التوصيل.",
    price: 5000,
    image: "/products/lcd-i2c.png",
    category: "مكونات",
  },
  {
    id: "servo",
    name: "محرك سيرفو",
    description: "محرك سيرفو دقيق SG90 للتحكم بالحركة والزوايا.",
    price: 3000,
    image: "/products/servo.png",
    category: "محركات",
  },
  {
    id: "dht-sensor",
    name: "حساس رطوبة الجو والحرارة",
    description: "حساس DHT لقياس درجة الحرارة ونسبة الرطوبة في الجو بدقة لمشاريع المناخ.",
    price: 4000,
    image: "/products/dht-sensor.png",
    category: "حساسات",
  },
  {
    id: "gas-sensor",
    name: "حساس غاز",
    description: "حساس MQ-2 للكشف عن تسرب الغاز والدخان في البيئة.",
    price: 4000,
    image: "/products/gas-sensor.png",
    category: "حساسات",
  },
  {
    id: "wires",
    name: "وايرات توصيل",
    description: "مجموعة أسلاك توصيل ملونة لربط المكونات على البريدبورد.",
    price: 2500,
    image: "/products/wires.png",
    category: "مكونات",
  },
  {
    id: "radar",
    name: "رادار (حساس مسافة)",
    description: "حساس موجات فوق صوتية HC-SR04 لقياس المسافات بدقة.",
    price: 2000,
    image: "/products/radar.png",
    category: "حساسات",
  },
  {
    id: "relay",
    name: "ريلي",
    description: "وحدة ريلي 5 فولت للتحكم بالأجهزة ذات الجهد العالي.",
    price: 2000,
    image: "/products/relay.png",
    category: "مكونات",
  },
  {
    id: "soil-sensor",
    name: "حساس رطوبة تربة",
    description: "حساس لقياس نسبة رطوبة التربة في مشاريع الزراعة الذكية.",
    price: 2000,
    image: "/products/soil-sensor.png",
    category: "حساسات",
  },
  {
    id: "rain-sensor",
    name: "حساس مطر",
    description: "حساس للكشف عن قطرات المطر ومستوى الأمطار.",
    price: 1500,
    image: "/products/rain-sensor.png",
    category: "حساسات",
  },
  {
    id: "buzzer",
    name: "بازر",
    description: "صافرة إلكترونية لإصدار التنبيهات الصوتية في المشاريع.",
    price: 1000,
    image: "/products/buzzer.png",
    category: "مكونات",
  },
  {
    id: "leds",
    name: "ليدات (5 قطع)",
    description: "مجموعة من 5 ثنائيات ضوئية ملونة 5مم للإضاءة والإشارات.",
    price: 250,
    image: "/products/leds.png",
    category: "مكونات",
  },
  {
    id: "resistors",
    name: "مقاومات (5 قطع)",
    description: "مجموعة من 5 مقاومات كربونية لحماية وتنظيم الدوائر.",
    price: 250,
    image: "/products/resistors.png",
    category: "مكونات",
  },
]

export const categories = ["الكل", "لوحات", "حساسات", "مكونات", "محركات"] as const

export function formatPrice(price: number) {
  return price.toLocaleString("ar-IQ")
}

export function whatsappLink(product: Product) {
  const message = `مرحباً، أرغب بطلب المنتج التالي من متجر Pixel Store:\n\n• ${product.name}\n• السعر: ${formatPrice(
    product.price,
  )} دينار عراقي\n\nهل هو متوفر؟`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
