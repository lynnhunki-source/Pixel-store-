export type ProductSpecs = {
  voltage: string
  power: string
  processor: string
  performance: string
  connection: string
  uses: string[]
}

export type Product = {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: "لوحات" | "حساسات" | "مكونات" | "محركات"
  specs: ProductSpecs
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
    specs: {
      voltage: "5V ⎓ 4A عبر USB-C",
      power: "10–20 واط تحت الحمل الكامل",
      processor: "Rockchip RK3588 ثماني النواة (4×A76 + 4×A55)",
      performance: "حتى 2.4GHz + معالج رسومات Mali-G610 + NPU بقوة 6 TOPS",
      connection: "HDMI 8K، USB 3.0، جيجابت إيثرنت، M.2، GPIO 40 دبوس",
      uses: [
        "خوادم منزلية ومراكز وسائط متعددة",
        "تطبيقات الذكاء الاصطناعي والرؤية الحاسوبية",
        "أنظمة تشغيل Linux/Android مدمجة",
      ],
    },
  },
  {
    id: "esp32-s3-n16r8",
    name: "ESP32-S3 N16R8",
    description: "متحكم قوي مع WiFi و Bluetooth، ذاكرة فلاش 16MB و PSRAM 8MB لمشاريع إنترنت الأشياء.",
    price: 16000,
    image: "/products/esp32-s3.png",
    category: "لوحات",
    specs: {
      voltage: "3.3V منطق / 5V عبر USB-C",
      power: "~40mA نشط، ~10µA في وضع النوم العميق",
      processor: "Xtensa LX7 ثنائي النواة 32-bit",
      performance: "حتى 240MHz، فلاش 16MB و PSRAM 8MB مع تسريع للتعلم الآلي",
      connection: "WiFi + Bluetooth 5 LE، USB-C، حتى 44 منفذ GPIO",
      uses: [
        "أجهزة إنترنت الأشياء (IoT)",
        "مشاريع الرؤية عبر الكاميرا",
        "الأتمتة والتحكم اللاسلكي",
      ],
    },
  },
  {
    id: "arduino-uno",
    name: "أردوينو Uno",
    description: "لوحة تحكم متكاملة R3 مثالية لجميع مشاريع الإلكترونيات والبرمجة.",
    price: 7000,
    image: "/products/arduino-uno.png",
    category: "لوحات",
    specs: {
      voltage: "5V تشغيل / 7–12V دخل خارجي",
      power: "~50mA نموذجي",
      processor: "ATmega328P 8-bit",
      performance: "16MHz، فلاش 32KB، ذاكرة SRAM 2KB",
      connection: "USB-B، 14 دبوس رقمي، 6 مداخل أنالوج",
      uses: [
        "تعلّم البرمجة والإلكترونيات",
        "مشاريع التحكم البسيطة",
        "بناء النماذج الأولية",
      ],
    },
  },
  {
    id: "breadboard",
    name: "بريدبورد",
    description: "لوحة تجارب بدون لحام لتوصيل الدوائر الإلكترونية بسهولة.",
    price: 3000,
    image: "/products/breadboard.png",
    category: "مكونات",
    specs: {
      voltage: "يتحمل حتى 300V بين النقاط",
      power: "حتى 1A لكل خط توصيل",
      processor: "—",
      performance: "830 نقطة توصيل مع خطوط تغذية جانبية",
      connection: "توصيل بالضغط بدون لحام (2.54mm)",
      uses: [
        "تجميع الدوائر مؤقتاً",
        "اختبار المكونات بأمان",
        "النماذج الأولية السريعة",
      ],
    },
  },
  {
    id: "lcd-i2c",
    name: "شاشة LCD I2C",
    description: "شاشة عرض 16×2 مع وحدة I2C لتوفير منافذ التوصيل.",
    price: 5000,
    image: "/products/lcd-i2c.png",
    category: "مكونات",
    specs: {
      voltage: "5V",
      power: "~20mA مع الإضاءة الخلفية",
      processor: "متحكم HD44780 + موسّع I2C PCF8574",
      performance: "عرض نصي 16×2 حرف",
      connection: "I2C عبر منفذين فقط (SDA / SCL)",
      uses: [
        "عرض القراءات والبيانات",
        "قوائم واجهات المستخدم",
        "الساعات وأجهزة القياس",
      ],
    },
  },
  {
    id: "servo",
    name: "محرك سيرفو",
    description: "محرك سيرفو دقيق SG90 للتحكم بالحركة والزوايا.",
    price: 3000,
    image: "/products/servo.png",
    category: "محركات",
    specs: {
      voltage: "4.8–6V",
      power: "~100–250mA أثناء الحركة",
      processor: "دائرة تحكم PWM مدمجة",
      performance: "عزم 1.8 كجم·سم، نطاق دوران 0–180°",
      connection: "3 أسلاك (إشارة PWM + تغذية)",
      uses: [
        "تحريك الأذرع الروبوتية",
        "أنظمة التوجيه والتحكم",
        "الأبواب والحواجز الآلية",
      ],
    },
  },
  {
    id: "dht-sensor",
    name: "حساس رطوبة الجو والحرارة",
    description: "حساس DHT لقياس درجة الحرارة ونسبة الرطوبة في الجو بدقة لمشاريع المناخ.",
    price: 4000,
    image: "/products/dht-sensor.png",
    category: "حساسات",
    specs: {
      voltage: "3.3–5V",
      power: "~1.5mA أثناء القياس",
      processor: "متحكم قياس رقمي مدمج",
      performance: "دقة الحرارة ±0.5°، دقة الرطوبة ±2–5%",
      connection: "خرج رقمي بسلك واحد (Single-Wire)",
      uses: [
        "محطات مراقبة الطقس",
        "أنظمة التحكم بالمناخ",
        "الزراعة الذكية",
      ],
    },
  },
  {
    id: "gas-sensor",
    name: "حساس غاز",
    description: "حساس MQ-2 للكشف عن تسرب الغاز والدخان في البيئة.",
    price: 4000,
    image: "/products/gas-sensor.png",
    category: "حساسات",
    specs: {
      voltage: "5V",
      power: "~150mA (تسخين العنصر الحساس)",
      processor: "عنصر حساس ثاني أكسيد القصدير SnO₂",
      performance: "نطاق كشف 300–10000ppm للغاز والدخان",
      connection: "خرج أنالوج + رقمي",
      uses: [
        "أنظمة إنذار تسرب الغاز",
        "كاشفات الدخان",
        "مراقبة جودة الهواء",
      ],
    },
  },
  {
    id: "wires",
    name: "وايرات توصيل",
    description: "مجموعة أسلاك توصيل ملونة لربط المكونات على البريدبورد.",
    price: 2500,
    image: "/products/wires.png",
    category: "مكونات",
    specs: {
      voltage: "حتى 300V",
      power: "تيار حتى 1A لكل سلك",
      processor: "—",
      performance: "أطوال 20سم بأطراف ذكر/أنثى",
      connection: "دبابيس Dupont قياس 2.54mm",
      uses: [
        "توصيل المكونات ببعضها",
        "ربط البريدبورد باللوحات",
        "التوصيلات المؤقتة",
      ],
    },
  },
  {
    id: "radar",
    name: "رادار (حساس مسافة)",
    description: "حساس موجات فوق صوتية HC-SR04 لقياس المسافات بدقة.",
    price: 2000,
    image: "/products/radar.png",
    category: "حساسات",
    specs: {
      voltage: "5V",
      power: "~15mA أثناء القياس",
      processor: "دائرة إرسال واستقبال موجات فوق صوتية",
      performance: "مدى 2سم – 4م، دقة تصل إلى 3مم",
      connection: "منفذا Trigger / Echo رقميان",
      uses: [
        "قياس المسافات",
        "تجنّب العوائق في الروبوتات",
        "أنظمة مساعدة الركن",
      ],
    },
  },
  {
    id: "relay",
    name: "ريلي",
    description: "وحدة ريلي 5 فولت للتحكم بالأجهزة ذات الجهد العالي.",
    price: 2000,
    image: "/products/relay.png",
    category: "مكونات",
    specs: {
      voltage: "5V لملف التحكم",
      power: "~70mA عند التشغيل",
      processor: "مفتاح ميكانيكي مع عازل ضوئي",
      performance: "يتحمل أحمالاً حتى 10A / 250V AC",
      connection: "دخل رقمي + أطراف حمل (NO/NC/COM)",
      uses: [
        "التحكم بالأجهزة المنزلية",
        "تشغيل الأحمال عالية الجهد",
        "الأتمتة الكهربائية",
      ],
    },
  },
  {
    id: "soil-sensor",
    name: "حساس رطوبة تربة",
    description: "حساس لقياس نسبة رطوبة التربة في مشاريع الزراعة الذكية.",
    price: 3000,
    image: "/products/soil-sensor.png",
    category: "حساسات",
    specs: {
      voltage: "3.3–5V",
      power: "~35mA",
      processor: "قطبان قياس + مقارن LM393",
      performance: "خرج نسبي يتغير مع رطوبة التربة",
      connection: "خرج أنالوج + رقمي",
      uses: [
        "أنظمة الري الآلي",
        "مراقبة صحة النباتات",
        "الزراعة الذكية",
      ],
    },
  },
  {
    id: "rain-sensor",
    name: "حساس مطر",
    description: "حساس للكشف عن قطرات المطر ومستوى الأمطار.",
    price: 1500,
    image: "/products/rain-sensor.png",
    category: "حساسات",
    specs: {
      voltage: "3.3–5V",
      power: "~20mA",
      processor: "لوح استشعار + مقارن LM393",
      performance: "كشف وجود الماء وقياس مستواه",
      connection: "خرج أنالوج + رقمي",
      uses: [
        "الكشف عن هطول المطر",
        "إغلاق النوافذ الآلي",
        "محطات الطقس",
      ],
    },
  },
  {
    id: "buzzer",
    name: "بازر",
    description: "صافرة إلكترونية لإصدار التنبيهات الصوتية في المشاريع.",
    price: 1000,
    image: "/products/buzzer.png",
    category: "مكونات",
    specs: {
      voltage: "3.3–5V",
      power: "~30mA",
      processor: "عنصر كهروضغطي (Piezo)",
      performance: "نغمة صوتية بتردد ~2.3kHz",
      connection: "منفذ رقمي واحد",
      uses: [
        "التنبيهات الصوتية",
        "أجهزة الإنذار",
        "ردود الفعل الصوتية",
      ],
    },
  },
  {
    id: "leds",
    name: "ليدات (5 قطع)",
    description: "مجموعة من 5 ثنائيات ضوئية ملونة 5مم للإضاءة والإشارات.",
    price: 250,
    image: "/products/leds.png",
    category: "مكونات",
    specs: {
      voltage: "1.8–3.3V حسب اللون",
      power: "~20mA لكل ليد",
      processor: "—",
      performance: "قطر 5مم بإضاءة عالية السطوع",
      connection: "قطبان (أنود/كاثود) عبر مقاومة",
      uses: [
        "مؤشرات الحالة",
        "الإضاءة والإشارات",
        "مشاريع التعلّم",
      ],
    },
  },
  {
    id: "resistors",
    name: "مقاومات (5 قطع)",
    description: "مجموعة من 5 مقاومات كربونية لحماية وتنظيم الدوائر.",
    price: 250,
    image: "/products/resistors.png",
    category: "مكونات",
    specs: {
      voltage: "حتى 250V",
      power: "0.25 واط لكل مقاومة",
      processor: "—",
      performance: "قيم متنوعة بدقة ±5%",
      connection: "توصيل على التوالي أو التوازي",
      uses: [
        "حماية الليدات",
        "تقسيم الجهد",
        "تنظيم مرور التيار",
      ],
    },
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
