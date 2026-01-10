// --- GLOBAL APP CONFIGURATION ---
export const appConfig = {
    recruitment: {
        isOpen: false, // Set to TRUE so the Apply Now button works immediately
        // To link to Excel: Create a Google Sheet -> Extensions -> Apps Script -> Deploy as Web App -> Paste URL here
        // The JoinForm component is set up to POST data to this URL
        googleSheetScriptUrl: "https://script.google.com/macros/s/AKfycbxTotggT69NMKX2CiOdf75KUiwqYHqspveSXMfvEQEPkXr5GscS_vXivACzartVja-F/exec",
    },
    sponsorship: {
        // Link to your external form (Google Form, Typeform, etc.)
        contactFormUrl: "https://forms.gle/KQ7KqYaEPTQUBWtT8"
    },
    media: {
        // URL for the previous years' magazine archive site
        magazineArchiveUrl: "https://issuu.com/formulamanipal"
    }
};

export interface Member {
  id: number;
  name: string;
  role: string;
  department: string;
  quote: string;
  image: string;
  socials: {
    linkedin?: string;
    phonenumber?:number;
  };
}

export interface CarStats {
  name: string;
  competitionCode?: string;
  type: 'EV' | 'CV'; // SELECTOR FOR EV OR COMBUSTION
  image: string;
  customStat1: {
      label: string;
      value: string;
  };
  customStat2: {
      label: string;
      value: string;
  };
  
  // EV SPECIFIC
  motor?: string;
  battery?: string;
  voltage?: string;

  // CV SPECIFIC
  engine?: string;
  displacement?: string;
  induction?: string;
  powerOutput?: string;

  description: string;
  detailedSpecs?: {
    chassis?: string;
    body?: string;
    powertrain?: string;
    brakes?: string;
    tires?: string;
    transmission?: string;
    electronics?: string;
    suspension?: string;
    ergonomics?: string;
  };
}

export interface Award {
    title: string;
    value: string;
}

export interface SeasonAchievement {
  rank: string;
  highlight: string;
  points: string;
  teamPhoto: string;
  awards: Award[]; // New structured awards list
}

export interface SeasonData {
    car: CarStats;
    achievements: SeasonAchievement;
    // Changed from flat array to categorized structure for flexible counts
    members: {
        board: Member[];
        core: Member[];
        general: Member[];
    };
    hasCar?: boolean; 
}

export interface Subsystem {
    name: string;
    description: string;
    research: string;
}

export interface Sponsor {
    name: string;
    url: string;
    image: string;
    description: string; 
}

// Manually defined seasons list
export const seasons: string[] = [
    "2025-2026","2024-2025", "2023-2024", 
    "2022-2023", "2021-2022", "2020-2021", "2019-2020","2019e-2020e",
    "2018-2019", "2017-2018", "2016-2017",
    "2014-2015", "2013-2014","2011-2012", "2010-2011",
    "2009-2010", "2008-2009"
];

// Default Data Templates (Helpers)
const sampleBoard: Member[] = [
    { id: 0, name: "Aarav Patel", role: "Team Captain", department: "Management", quote: "Leadership is about empowering others.", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4", socials: { linkedin: "#" } },
    { id: 1, name: "Vihaan Rao", role: "Technical Director", department: "Aerodynamics", quote: "Efficiency is our obsession.", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vihaan&backgroundColor=b6e3f4", socials: { linkedin: "#" } },
    { id: 2, name: "Aditya Sharma", role: "Chief Engineer", department: "Chassis", quote: "We build for resilience.", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya&backgroundColor=b6e3f4", socials: { linkedin: "#" } },
];
const sampleCore: Member[] = [
    { id: 3, name: "Rohan Gupta", role: "Suspension Lead", department: "Suspension", quote: "Power is nothing without control.", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan&backgroundColor=b6e3f4", socials: { linkedin: "#" } },
    { id: 4, name: "Karthik Iyer", role: "Electronics Lead", department: "Electronics", quote: "We wire the future.", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karthik&backgroundColor=b6e3f4", socials: { linkedin: "#" } },
    { id: 5, name: "Siddharth Singh", role: "Powertrain Lead", department: "Powertrain", quote: "Precision tuning is key.", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siddharth&backgroundColor=b6e3f4", socials: { linkedin: "#" } },
    { id: 6, name: "Vikram Malhotra", role: "Marketing Head", department: "Management", quote: "Building a legacy.", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram&backgroundColor=b6e3f4", socials: { linkedin: "#" } },
    { id: 7, name: "Arjun Nair", role: "Driverless Lead", department: "Driverless", quote: "Paving the way for AI.", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&backgroundColor=b6e3f4", socials: { linkedin: "#" } },
    { id: 8, name: "Devansh Joshi", role: "Structures Lead", department: "Structures", quote: "Safety is non-negotiable.", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Devansh&backgroundColor=b6e3f4", socials: { linkedin: "#" } },
];
const sampleGeneral: Member[] = [
    { id: 9, name: "Ishaan Verma", role: "Junior Engineer", department: "Suspension", quote: "Learning to go faster.", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ishaan&backgroundColor=b6e3f4", socials: { linkedin: "#" } },
    { id: 10, name: "Dhruv Kapoor", role: "Junior Engineer", department: "Electronics", quote: "Coding the logic.", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dhruv&backgroundColor=b6e3f4", socials: { linkedin: "#" } },
    { id: 11, name: "Kabir Das", role: "Junior Engineer", department: "Aerodynamics", quote: "Chasing airflow.", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kabir&backgroundColor=b6e3f4", socials: { linkedin: "#" } },
];

// CV Default Template
const defaultCarTemplate: CarStats = {
    name: "FMxx",
    type: "CV",
    image:'',
    customStat1: { label: "0-100 km/h", value: "3.5s" },
    customStat2: { label: "Weight", value: "220kg" },
    engine: "Honda CBR 600RR",
    displacement: "599cc",
    induction: "Naturally Aspirated",
    powerOutput: "80 BHP",
    description: "The standard bearer for the season. Optimized for reliability and performance.",
    detailedSpecs: {
        chassis: "Tubular Space Frame",
        body: "GFRP Bodywork",
        powertrain: "Honda CBR 600RR Inline-4",
        brakes: "Dual Circuit Hydraulic",
        tires: "Hoosier 10 inch",
        transmission: "Chain Drive with Drexler LSD",
        electronics: "Performance ECU",
        suspension: "Double Wishbone",
        ergonomics: "Standard Seat"
    }
};

const defaultAchievementTemplate: SeasonAchievement = {
    rank: "Participant",
    highlight: "Successful Event Completion",
    points: "300 Points",
    teamPhoto: "./team/placeholder.jpeg",
    awards: [
        { title: "Overall Rank", value: "Participant" },
        { title: "Design Event", value: "Finalist" },
        { title: "Cost Event", value: "Top 10" }
    ]
};

// --- THE MAIN DATABASE ---
export const database: Record<string, SeasonData> = {
    "2025-2026": {
        car: {
            name: "FM26",
            type: "EV",
            customStat1: { label: "0-100 km/h", value: "3.5s" },
            customStat2: { label: "Weight", value: "220kg" },
            motor: "AMK DD 4WD Hub Motors",
            battery: "8.5 kWh Custom Pack",
            voltage: "600V MAX",
            image:'',
            description: "The FM26 is our most ambitious project yet, featuring a full four-wheel-drive hub motor system with torque vectoring. The monocoque chassis has been optimized for a 12% weight reduction while increasing torsional rigidity.",
            detailedSpecs: {
                chassis: "CFRP Monocoque",
                body: "Integrated Aerodynamic Bodywork",
                powertrain: "4x AMK DD5-14-10 PO W-55",
                brakes: "Regenerative Braking + AP Racing Calipers",
                tires: "Continental C19 Slicks",
                transmission: "1:15 Planetary Gearbox",
                electronics: "Distributed Control System over CAN-FD",
                suspension: "Decoupled Heave and Roll suspension",
                ergonomics: "Driver-in-the-loop simulator optimized position"
            }
        },
        achievements: {
            rank: "Season In Progress",
            highlight: "Developing 4WD",
            points: "N/A",
            teamPhoto: "./team/team25.jpg",
            awards: [
                { title: "Current Status", value: "Manufacturing Phase" }
            ]
        },
        members: {
            board: [
                { id: 0, name: "Amogha Rao", role: "Team Manager", department: "Team Manager", quote: "", image: "./fm_sr/amogha.jpg", socials: { linkedin: "https://www.linkedin.com/in/amogha-rao-ar/",phonenumber:+919986507801 } },
                { id: 1, name: "Vandana Malhotra", role: "Mechanical Head", department: "Mechanical Head", quote: "", image: "./fm_sr/vandana.jpg", socials: { linkedin: "https://www.linkedin.com/in/vandana-malhotra-517999250/", phonenumber : +917700904153} },
                { id: 2, name: "Krit Gupta", role: "Electrical Head", department: "Electrical Head", quote: "", image: "./fm_sr/krit.jpg", socials: { linkedin: "https://www.linkedin.com/in/krit-gupta-a939a1284/", phonenumber :+918073599506 } }
            ],
            core: [
                { id: 0, name: "Ratish A.M", role: "Structures Lead", department: "Structures", quote: "", image: "./fm_sr/ratish.jpg", socials: { linkedin: "https://www.linkedin.com/in/ratish-a-m-419996219/" } },
                { id: 1, name: "Pragna Harish", role: "Aerodynamics & Composites Lead", department: "Aerodynamics & Composites", quote: "", image: "./fm_sr/pragna .jpg", socials: { linkedin: "https://www.linkedin.com/in/pragna-h-12a103200/" } },
                { id: 2, name: "Rishi Vikram", role: "Vehicle Dynamics Lead", department: "Vehicle Dynamics", quote: "", image: "./fm_sr/rishi.jpg", socials: { linkedin: "https://www.linkedin.com/in/theofficialrishivikram/" } },
                { id: 3, name: "Anshul Garg", role: "Transmission Lead", department: "Transmission", quote: "", image: "./fm_sr/anshul.jpg", socials: { linkedin: "https://www.linkedin.com/in/anshul-garg-044940302/" } },
                { id: 4, name: "Aabhaas Kalia", role: "E-Powertrain Lead", department: "E-Powertrain", quote: "", image: "./fm_sr/aabhas.jpg", socials: { linkedin: "https://www.linkedin.com/in/aabhaaskalia/" } },
                { id: 5, name: "Pratyush Trivedi", role: "Electronics & Control Systems Lead", department: "Electronics & Control Systems ", quote: "", image: "./fm_sr/pratyush.jpg", socials: { linkedin: "https://www.linkedin.com/in/pratyush-trivedi-32871b243/" } },
                { id: 6, name: "Gitaansh H Bhuradia", role: "Driverless Lead", department: "Driverless", quote: "", image: "./fm_sr/geetansh.jpg", socials: { linkedin: "https://www.linkedin.com/in/gitaansh-h-bhuradia/" } }
            ],

            general: [
                { id: 0, name: "Kasinath Saigal", role: "", department: "Structures", quote: '', image: "./fm_sr/kasi.jpg", socials: { linkedin: "https://www.linkedin.com/in/kasinath-saigal-926979322/" } },
                { id: 1, name: "Aaditya Revankar", role: "", department: "Structures", quote: "Junior Engineer", image: "./fm_jr/aaditya.jpg", socials: { linkedin: "https://www.linkedin.com/in/aaditya-revankar-7143232b7/" }},
                { id: 2, name: "Aarav Tandon", role: "", department: "Structures", quote: "Junior Engineer", image: "./fm_jr/aarav.jpg", socials: { linkedin: "https://www.linkedin.com/in/aarav-tandon-961168229/" } },
                { id: 3, name: "Lejin J Lenin", role: "", department: "Structures", quote: "Junior Engineer", image: "./fm_jr/lejin.jpg", socials: { linkedin: "https://www.linkedin.com/in/lejin-j-lenin-224422368/" } },
                { id: 4, name: "Sherwin", role: "", department: "Structures", quote: "Junior Engineer", image: "./fm_jr/sherwin.jpg", socials: { linkedin: "https://www.linkedin.com/in/sherwin-u-a6aa01370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" } },
                { id: 5, name: "Jaswanth Nimalan", role: "", department: "Aerodynamics & Composites", quote: "Junior Engineer", image: "./fm_jr/jaswanth.jpg", socials: { linkedin: "https://www.linkedin.com/in/jaswanth-nimalan-esakki-sundar-912234338/" } },
                { id: 6, name: "Shivam Goyal", role: "", department: "Aerodynamics & Composites", quote: "Junior Engineer", image: "./fm_jr/shivam.jpg", socials: { linkedin: "https://www.linkedin.com/in/shivam-goyal-78b415321/" } },
                { id: 7, name: "Mehak Ali", role: "", department: "Aerodynamics & Composites", quote: "Junior Engineer", image: "./fm_sr/place.jpeg", socials: { linkedin: "hhttps://www.linkedin.com/in/mehak-ali-1bbb15380/?trk=contact-info" } },
                { id: 8, name: "ADWAIT KUSHWAHA", role: "", department: "Aerodynamics & Composites", quote: "Junior Engineer", image: "./fm_sr/place.jpeg", socials: { linkedin: "" } },
                { id: 9, name: "Vishnu", role: "", department: "Vehicle Dynamics", quote: "", image: "./fm_sr/vishnu.jpg", socials: { linkedin: "" } },
                { id: 10, name: "Rishaan Nair", role: "", department: "Vehicle Dynamics", quote: "Junior Engineer", image: "./fm_jr/rishaam.jpg", socials: { linkedin: "https://www.linkedin.com/in/rishaan-nair-b79316370/" } },
                { id: 11, name: "Chinmay Ranade", role: "", department: "Vehicle Dynamics", quote: "Junior Engineer", image: "./fm_jr/chinmay.jpg", socials: { linkedin: "https://www.linkedin.com/in/chinmay-ranade-40b10920b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" } },
                { id: 12, name: "Jayden Savio Pereira", role: "", department: "Vehicle Dynamics", quote: "Junior Engineer", image: "./fm_jr/jayden.jpg", socials: { linkedin: "https://www.linkedin.com/in/jayden-pereira-778889328/" } },
                { id: 13, name: "ABHIMANYU BHARGAVA", role: "", department: "Vehicle Dynamics", quote: "Junior Engineer", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/abhimanyu-niranjan-bhargava-2a81082a1/" } },
                { id: 14, name: "SHADANAN S", role: "", department: "Transmission", quote: "", image: "./fm_sr/shadanan.jpg", socials: { linkedin: "https://www.linkedin.com/in/devadathan-r-menon-705440360/" } },
                { id: 15, name: "Devadathan R Menon", role: "", department: "Transmission", quote: "Junior Engineer", image: "./fm_jr/dev.jpg", socials: { linkedin: "https://www.linkedin.com/in/devadathan-r-menon-705440360/" } },
                { id: 16, name: "Saksham Agrawal", role: "", department: "Transmission", quote: "Junior Engineer", image: "./fm_jr/saksham.jpg", socials: { linkedin: "https://www.linkedin.com/in/saksham-agrawal-462698311/" } },
                { id: 17, name: "Nitha B Venugopal", role: "", department: "Transmission", quote: "Junior Engineer", image: "./fm_jr/nitha.jpg", socials: { linkedin: "https://www.linkedin.com/in/nitha-b-6329742b8/" } },
                { id: 18, name: "Ishan Panchal", role: "", department: "E-Powertrain", quote: "", image: "./fm_sr/ishaan1.jpg", socials: { linkedin: "https://www.linkedin.com/in/ishan-panchal-b839672a9/" } },
                { id: 19, name: "raghunandhan prakash", role: "", department: "E-Powertrain", quote: "Junior Engineer", image: "./fm_sr/raghu.jpg", socials: { linkedin: "https://www.linkedin.com/in/raghunandhan-prakash-134867254/" } },
                { id: 20, name: "ANUSHA SAMAL", role: "", department: "E-Powertrain", quote: "Junior Engineer", image: "./fm_jr/anusha.jpg", socials: { linkedin: "https://in.linkedin.com/in/anusha-samal-2a8296256" } },
                { id: 21, name: "ADIT JINDAL", role: "", department: "E-Powertrain", quote: "Junior Engineer", image: "./fm_jr/adit.jpg", socials: { linkedin: "https://www.linkedin.com/in/adit-jindal-58098b286/" } },
                { id: 22, name: "Nandita Neelakantan", role: "", department: "E-Powertrain", quote: "Junior Engineer", image: "./fm_jr/nandita.jpg", socials: { linkedin: "https://www.linkedin.com/in/nandita-neelakantan-917a08370/" } },
                { id: 23, name: "SUMIR BALAKRISHNAN", role: "", department: "Electronics & Control Systems ", quote: "", image: "./fm_sr/sumir.jpg", socials: { linkedin: "https://www.linkedin.com/in/sumir-balakrishnan-809890244/" } },
                { id: 24, name: "ANISTON DA SILVA", role: "", department: "Electronics & Control Systems ", quote: "", image: "./fm_sr/aniston.jpg", socials: { linkedin: "https://www.linkedin.com/in/aniston-da-silva-47b1b61b9/" } },
                { id: 25, name: "PALAK JOSHI", role: "", department: "AElectronics & Control Systems ", quote: "Junior Engineer", image: "./fm_jr/palak.jpg", socials: { linkedin: "https://www.linkedin.com/in/palak-joshi-b34585323/" } },
                { id: 26, name: "VEDIKA JANGLE", role: "", department: "Electronics & Control Systems ", quote: "Junior Engineer", image: "./fm_jr/vedika.jpg", socials: { linkedin: "https://www.linkedin.com/in/vedika-jangle-b57845320/" } },
                { id: 27, name: "Kritagya Tripathi", role: "", department: "Electronics & Control Systems ", quote: "Junior Engineer", image: "./fm_jr/kritagya.jpg", socials: { linkedin: "https://www.linkedin.com/in/kritagya-tripathi-b530a5212/" } },
                { id: 28, name: "Soham Sahu", role: "", department: "Electronics & Control Systems ", quote: "Junior Engineer", image: "./fm_jr/soham.jpg", socials: { linkedin: "https://www.linkedin.com/in/soham-sahu-083699258/" } },
                { id: 29, name: "Venkat Sanagaram", role: "", department: "Electronics & Control Systems ", quote: "Junior Engineer", image: "./fm_jr/venkat.jpg", socials: { linkedin: "https://www.linkedin.com/in/venkat-sanagaram-137a0a330/" } },
                { id: 30, name: "PRIThAM PRASHANTH", role: "", department: "Electronics & Control Systems ", quote: "Junior Engineer", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/pritham-prashanth-490a8b200/" } },
                { id: 31, name: "KONKANA KONWAR", role: "", department: "Electronics & Control Systems ", quote: "Junior Engineer", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/konkana-konki-konwar-184666380/" } },
                { id: 32, name: "SHAMBHAVI DAS", role: "", department: "Electronics & Control Systems ", quote: "Junior Engineer", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/shambhavi-das-09734b327/" } },
                { id: 33, name: "deepam ahuja", role: "", department: "Driverless", quote: "NA", image: "./fm_sr/Deepam.jpg", socials: { linkedin: "https://www.linkedin.com/in/deepam-ahuja/" } },
                { id: 35, name: "Ajith BALAKRISHNAN", role: "", department: "Driverless", quote: "NA", image: "./fm_sr/ajith.jpg", socials: { linkedin: "https://www.linkedin.com/in/ajith-b-a8b9b9280/" } },
                { id: 36, name: "KRISHNA GERA", role: "", department: "Driverless", quote: "Junior Engineer", image: "./fm_jr/krishna.jpg", socials: { linkedin: "https://www.linkedin.com/in/krishna-gera-99a447321/" } },
                { id: 37, name: "RAHEE PRADEEP", role: "", department: "Driverless", quote: "Junior Engineer", image: "./fm_jr/rahee.jpg", socials: { linkedin: "https://www.linkedin.com/in/rahee-pradeep-6068482b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" } },
                { id: 39, name: "SARANGAN SRINIVASAN", role: "", department: "Driverless", quote: "Junior Engineer", image: "./fm_jr/saranagan.jpg", socials: { linkedin: "https://www.linkedin.com/in/sarangan-srinivasan-8abbb9313/" } },
                { id: 40, name: "Rovin Castelino", role: "", department: "Driverless", quote: "Junior Engineer", image: "./fm_jr/rovin.jpg", socials: { linkedin: "https://www.linkedin.com/in/rovincastelino12/" } },
                { id: 41, name: "Mohammed Amaan", role: "", department: "Driverless", quote: "Junior Engineer", image: "./fm_jr/amaan.jpg", socials: { linkedin: "https://www.linkedin.com/in/mohammed---amaan/" } },
                { id: 42, name: "ARHAN SAPRA", role: "", department: "Driverless", quote: "Junior Engineer", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/arhan-sapra-145b7a318/" } },
                { id: 43, name: "HRIDAY SHAH", role: "", department: "Management", quote: "Junior Management", image: "./fm_jr/hriday.jpg", socials: { linkedin: "https://www.linkedin.com/in/hriday-shah-6b247926a/" } },
                { id: 44, name: "Druvitha Reddy", role: "", department: "Management", quote: "Junior Management", image: "./fm_jr/druvitha.jpg", socials: { linkedin: "https://www.linkedin.com/in/druvitha-reddy-thiyyagura-a843a6317/" } },
                { id: 45, name: "AHMIK SINGH N", role: "", department: "Management", quote: "Junior Management", image: "./fm_jr/ahmik.jpg", socials: { linkedin: "https://www.linkedin.com/in/ahmik-3012-singh/" } },
                { id: 46, name: "Rushabh Manjeshwar", role: "", department: "Management", quote: "Junior Management", image: "./fm_jr/r.jpg", socials: { linkedin: "https://www.linkedin.com/in/rushabh-manjeshwar-924642355/" } },
                { id: 47, name: "Samved Shaji", role: "", department: "Management", quote: "Junior Management", image: "./fm_jr/samved.jpg", socials: { linkedin: "https://www.linkedin.com/in/samved-shaji-35aa2b330/" } },
                { id: 48, name: "SAANVI BANSAL", role: "", department: "Management", quote: "Junior Management", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/saanvi-bansal-4a736a328/" } },
                { id: 49, name: "ANSHU LONI", role: "", department: "Management", quote: "Junior Management", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/anshu-loni-692907312/" } },
                { id: 50, name: "ARNAV GUPTA", role: "", department: "Management", quote: "Junior Management", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/arnav-gupta-ba93a91b4/" } },
                ]
        },
        hasCar:false
    },
    "2024-2025": {
        car: {
            name: "FMXXV",
            competitionCode: "E27",
            type: "EV",
            customStat1: { label: "Torque", value: "140Nm" },
            customStat2: { label: "Power", value: "80KW" },
            motor: "Liquid Cooled EMRAX 208 HV",
            battery: "6.6 kWh net energy",
            voltage: "",
            image:'./cars/fm25.jpg',
            description: "FMXXV is a cutting-edge Formula Student EV featuring an AISI 1018 tubular spaceframe, CFRP body panels, liquid-cooled EMRAX 208 motor with 6.6 kWh Molicel battery, ISR/AP calipers, Hoosier slicks on Keizer rims, Drexler LSD transmission, custom electronics, double-wishbone suspension, and ergonomic fixed-seat design.",
            detailedSpecs: {
                chassis: "Tubular Spaceframe, Manufactured using AISI 1018 STEEL",
                body: "Vacuum assisted resin infused CFRP panels",
                powertrain: "Liquid Cooled EMRAX 208 HV, Molicel P42A Cells, 106S 4P Cells Configuration, 6.6 kWh net energy",
                brakes: "Front: ISR4-piston calipers Rear : AP Racing 2-piston calipers",
                tires: "Keizer 10 aluminium wheel rims paired with self-designed 7075 aluminium wheel centres and Hoosier R25B slicks",
                transmission: "A Drexler LSD with three torque-biasing options, paired with a 5.818 final drive and EN-24 halfshafts, delivers strong traction and reliable power transfer",
                electronics: "A Rhinehart PM100DZ inverter with an Arduino Mega based VCU, a Teensy-powered AMS using the LTC6813 BMS, and custom CAN-based logging form a reliable, integrated control and monitoring system",
                suspension: "A double non-parallel unequal-length wishbone suspension with pullrod actuation, paired with adjustable Ackermann steering geometry, enables precise handling and tunability",
                ergonomics: "A fixed seat and steering wheel with an adjustable pedal assembly, featuring a resin-infused carbon-fibre seat with PVC padding at the shoulders and base, provide a stable yet ergonomic driver fit"
            }
        },
        achievements: {
            rank: "3rd in Formula Bharat",
            highlight: "First EV Car",
            points: "3rd in Engineering Design",
            teamPhoto: "./team/team24.jpg",
            awards: [
                { title: "Overall Rank", value: "#3" },
                { title: "Cost & Manufacturing", value: "#3" },
                { title: "Engineering Design", value: "#3" },
                 {title: "Business Plan Presentation", value: "#8" },
            ]
        },
        members: {
            board: [
                { id: 51, name: "Vibhas Srivastava", role: "Team Manager", department: "Management", quote: "", image: "./Team member Photos '24/vibhaas.jpg", socials: { linkedin: "https://www.linkedin.com/in/vibhas-srivastava-087609280/" } },
                { id: 52, name: "Arin Agrawal", role: "Electrical Head", department: "Electrical", quote: "", image: "./Team member Photos '24/arin.jpg", socials: { linkedin: "https://www.linkedin.com/in/arin-agarwal-026551382/" } },
                { id: 53, name: "Joy Chaudhary", role: "Manufacturing Head", department: "Mechanical", quote: "", image: "./Team member Photos '24/joy.jpg", socials: { linkedin: "https://www.linkedin.com/in/joy-chaudhary-99aab9185/" } },
                { id: 54, name: "Amber Bhargava", role: "Mechanical Head", department: "Mechanical", quote: "",image: "./Team member Photos '24/amber.jpg", socials: { linkedin: "https://www.linkedin.com/in/amber-bhargava-b11601290/" } }
            ],
            core: [
                { id: 55, name: "Devyansh Joshi", role: "Aerodynamics Lead", department: "Mechanical", quote: "", image: "./Team member Photos '24/devuansh.jpg", socials: { linkedin: "https://www.linkedin.com/in/devyansh-joshi-b28416207/" } },
                { id: 56, name: "Piyush Ganti", role: "Composites Lead", department: "Mechanical", quote: "", image: "./Team member Photos '24/ghanti.jpg", socials: { linkedin: "https://www.linkedin.com/in/piyushganti/" } },
                { id: 57, name: "Abhimanyu Garg", role: "Vehicle Dynamics Lead", department: "Mechanical", quote: "", image: "./Team member Photos '24/abhimanyu.jpg", socials: { linkedin: "https://www.linkedin.com/in/abhimanyu-garg-93ab09308/" } },
                { id: 58, name: "Shiladitya Sanyal", role: "Transmission Lead", department: "Mechanical", quote: "", image: "./Team member Photos '24/laditya.jpg", socials: { linkedin: "https://www.linkedin.com/in/shiladityasanyal/" } },
                { id: 59, name: "Arsh Singh", role: "E-Powertrain Lead", department: "Mechanical", quote: "", image: "./Team member Photos '24/arsh.jpeg", socials: { linkedin: "https://www.linkedin.com/in/arsh-singh-4953a7249/" } },
            ],
            general: [
                { id: 60, name: "Shrinidhi Deshmukh", role: "Structures", department: "Mechanical", quote: "", image: "./Team member Photos '24/srinidhi.jpg", socials: { linkedin: "https://www.linkedin.com/in/shrinidhi-deshmukh-511a88282/" } },
                { id: 61, name: "Ananya Raulkar", role: "Vehicle Dyanmics", department: "Vehicle Dyanmics", quote: "", image: "./Team member Photos '24/ananya.jpg", socials: { linkedin: "https://www.linkedin.com/in/ananya-raulkar/" } },
                { id: 62, name: "Chithrinesh CV", role: "Electronics and Controls", department: "Electronics and Controls", quote: "", image: "./Team member Photos '24/chitranesh.jpg", socials: { linkedin: "https://www.linkedin.com/in/c-v-chithrinesh-b53b9529a/" } },
                { id: 63, name: "Jishnu Chattoraj", role: "Electronics and Controls", department: "Electronics and Controls", quote: "", image: "./Team member Photos '24/jishnu.jpg", socials: { linkedin: "https://www.linkedin.com/in/jishnu-chattoraj-75a72b301/" } },
                { id: 64, name: "Rishit Singh", role: "Electronics and Controls", department: "Electronics and Controls", quote: "", image: "./Team member Photos '24/rishit.jpeg", socials: { linkedin: "https://www.linkedin.com/in/rishit-singh-716019280/" } },
                { id: 65, name: "Vaibhav Agarwal", role: "Electronics and Controls", department: "Electronics and Controls", quote: "", image: "./Team member Photos '24/vaibhav.jpg", socials: { linkedin: "https://www.linkedin.com/in/vaibhav-agarwal-a5a5ab242/" } },
                { id: 66, name: "Soham Bose", role: "Driverless", department: "Driverless", quote: "", image: "./Team member Photos '24/soham.jpg", socials: { linkedin: "https://www.linkedin.com/in/soham-bose-24672528b/" } },
                { id: 67, name: "Rachel Koshy", role: "Management", department: "Management", quote: "", image: "./Team member Photos '24/rachel.jpeg", socials: { linkedin: "https://www.linkedin.com/in/rachel-koshy-257297260/" } },
                { id: 68, name: "Keerthana Mukesh", role: "Management", department: "Management", quote: "", image: "./Team member Photos '24/keerthana.jpeg", socials: { linkedin: "#" } },
            ]
        },
        hasCar: true
    },
    "2023-2024": {
        car: {
            name: "FM24",
            competitionCode:"CO1",
            type:"CV",
            customStat1: { label: "Torque", value: "56Nm" },
            customStat2: { label: "Weight", value: "229kg" },
            engine: "Honda CBR 600RR PC37, 2003 ",
            displacement:"600cc",
            induction:'56Nm (torque)',
            powerOutput:'85 BHP',
            image:'./cars/co1.jpg',
            description: "The FM24 embodied our team's engineering prowess, powered by a Honda CBR 600RR PC37 (2003) engine yielding 63kW and 56Nm of torque in a 229kg tubular spaceframe chassis of AISI 1018 steel. With CFRP bodywork, double wishbone suspension (front pullrod, rear pushrod), Drexler LSD, and Hoosier slicks, it delivered razor-sharp handling. Motec ECU and custom DAQ backed its 4th overall at Formula Bharat, plus 1st in Cost & Manufacturing and 4th in Engineering Design—proving efficient innovation wins races.",
            detailedSpecs: {
                chassis: "Tubular Spaceframe, Manufactured using AISI 1018 STEEL",
                body: "CFRP fabricated by Resin Transfer Infusion",
                brakes: " AP Racing master cylinders with ISR 4-piston front calipers, AP Racing 2-piston rear calipers, and floating SS hub-mounted rotors.",
                tires: "Keizer 10 aluminium wheel rims paired with self-designed 7075 aluminium wheel centres and Hoosier R25B slicks",
                transmission: "Chain drive with DID 520 ERV3 X-ring chain, Drexler clutch-type LSD (31 Nm preload), and 2.727 final drive ratio.",
                electronics: "Motec M400 ECU, Teensy 4.1 & STM32-based custom data acquisition system, and VectorNav VN-200 GPS-aided IMU.",
                suspension: "Double non-parallel unequal-length wishbones (front pullrod, rear pushrod) with adjustable Ackermann steering geometry.",
                ergonomics: "Fixed seat and steering wheel with adjustable pedal assembly, vacuum-bagged CFRP foam-core seat, and pneumatically actuated paddle-shift system with wheel-mounted buttons.",
        }
    },  
        achievements: {
            rank: "4th in Formula Bharat",
            highlight: "1st in Cost & Manufacturing",
            points: "4th in Business Plan",
            teamPhoto: "./team/team23.jpg",
            awards: [
                { title: "Overall Rank", value: "#4" },
                { title: "Cost & Manufacturing", value: "#1" },
                { title: "Engineering Design", value: "#4" },
            ]
        },
        members: {
            board: [
                { id: 0, name: "Ishaan Purey", role: "Team Manager", department: "Team Manager", quote: "NA", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/ishaanpurey/" } },
                { id: 1, name: "Arav Bagga", role: "Team Leader", department: "Team Leader", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/arav-bagga/" } },
                { id: 2, name: "Parthiv Patel", role: "Team Captain", department: "Team Captain", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/parthiv-patel-a05082154/" } },
            ],
            core: [
                { id: 0, name: "Vignesh Kannan", role: "Structures Head", department: "Mechanical", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/vignesh-kannan-31bb0a1a9/" } },
                { id: 1, name: "Rahul Sah", role: "Aerodynamics & Composites Head", department: "Mechanical", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/rahul-sah-934103228/" } },
                { id: 2, name: "Amulya Peerla", role: "Transmission Head", department: "Mechanical", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/amulya-peerla-82a24524a/" } },
                { id: 3, name: "Atishey Jain", role: "E-Powertrainhead", department: "Electrical", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/atisheykj/" } },
                { id: 4, name: "Akhilesh Rangaraj", role: "Vehicle Dyanmics head", department: "Mechanical", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/akhilesh-rangaraj-ba39b126b/" } },
                { id: 5, name: "Pranshu Gadepalli", role: "Engine head", department: "Mechanical", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/pranshu-gadepalli-371013c/" } },
                { id: 6, name: "Saksham Khatkar", role: "Electronics and Controls head", department: "Electrical", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/saksham-singh-khatkar-ab79a2230/" } },
                { id: 7, name: "Anay Patil", role: "Driverless Head", department: "Driverless", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/anaypatil/" } },
            ],
            general: [
                { id: 0, name: "Aditya Shah", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "" } },
                { id: 1, name: "Amog Naveen Rao", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/amog-naveen-rao-186225172/" } },
                { id: 2, name: "Durvas Kolluri", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/durvas-kolluri-769028273/" } },
                { id: 3, name: "Harshiv Balwani", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/harshiv-balwani-ba4191258/" } },
                { id: 4, name: "Jithin Joseph", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/harshiv-balwani-ba4191258/" } },
                { id: 5, name: "Keshav Varma", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "" } },
                { id: 6, name: "Shreyaas Rajan Patekar", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "" } },
                { id: 7, name: "Soham Kolambe", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
            ]
        },
        hasCar:true
    },

    "2022-2023": {
        car: {
            name: "FM23",
            competitionCode:"97",
            type:"CV",
            customStat1: { label: "Torque", value: "57 Nm" },
            customStat2: { label: "Power", value: "79 BHP" },
            engine: "Honda CBR 600RR PC37, 2003 ",
            displacement:"600cc",
            induction:'53 Nm (torque)',
            powerOutput:'79 BHP',
            image:'./cars/fm231.jpg',
            description:"The FM23 showcased our team's relentless drive for performance, fueled by a Honda CBR 600RR PC37 (2003) engine pumping 79 BHP and 57Nm of torque through a robust AISI 1018 steel tubular spaceframe. Clad in resin-infused CFRP bodywork, it gripped tracks with double wishbone suspension (front pullrod, rear pushrod), adjustable Ackermann, Drexler LSD (31Nm preload), and Hoosier R25B slicks on Keizer rims.",
            detailedSpecs: {
                chassis: "Tubular Spaceframe, Manufactured using AISI 1018 STEEL",
                body: "CFRP fabricated by Resin Transfer Infusion",
                brakes: " AP Racing master cylinders with ISR 4-piston front calipers, AP Racing 2-piston rear calipers, and floating SS hub-mounted rotors.",
                tires: "Keizer 10 aluminium wheel rims paired with self-designed 7075 aluminium wheel centres and Hoosier R25B slicks",
                transmission: "Drive type is chain drive using a DID 520 ERV3 X-ring chain, paired with a Drexler clutch-type limited slip differential with 31 Nm preload and a final drive ratio of 2.727.",
                electronics: "Motec M400 ECU, Teensy 4.1 & STM32-based custom data acquisition system, and VectorNav VN-200 GPS-aided IMU.",
                suspension: "Double non-parallel unequal-length wishbones (front pullrod, rear pushrod) with adjustable Ackermann steering geometry.",
                ergonomics: "Fixed seat and steering wheel with adjustable pedal assembly, vacuum-bagged CFRP foam-core seat, and pneumatically actuated paddle-shift system with wheel-mounted buttons.",
        }
    },  
        achievements: {
            rank: "12th in FS Austria",
            highlight: "6th in Cost & Manufacturing",
            points: "10th in Skidpad",
            teamPhoto: "./team/team22.jpg",
            awards: [
                { title: "Cost & Manufacturing", value: "#6" },
                { title: "Acceleration ", value: "#7" },
                { title: "Business Plan Presentation", value: "#18" },

            ]
        },
        members: {
            board: [
                { id: 0, name: "Aniruddh Ande", role: "Team Manager", department: "Management", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 1, name: "Samar Singh Jakhar", role: "CV Team Leader", department: "Management", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 2, name: "Arya Bobade", role: "EV Team Leader", department: "Management", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
            ],

            core: [
                { id: 0, name: "Pranav Sudheer", role: "Structures Head", department: "Mechanical", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/sudheerpranav/" } },
                { id: 1, name: "Shashank Kondapi", role: "Aerodynamics & Composites Head", department: "Mechanical", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/shashankkondapi/" } },
                { id: 2, name: "Rhik Banerjee", role: "E-Powertrain Head", department: "Electrical", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/rhik-banerjee-50625b21b/" } },
                { id: 3, name: "Rohan Derek Mendonca", role: "Engine Head", department: "Mechanical", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/randomdiskmemory/" } },
                { id: 4, name: "Aamann Patel", role: "CV Vehicle Dynamics Head", department: "Mechanical", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/aamann-patel-52955222a/" } },
                { id: 5, name: "Mahic Shah", role: "Electronics Head", department: "Electrical", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/mahicshah/" } },
                { id: 6, name: "Pellakuru Maneesh", role: "Transmission Head", department: "Mechanical", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/maneesh-pellakuru/" } },
                { id: 7, name: "Allen Thambi", role: "EV Vehicle Dynamics Head", department: "Electrical", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/allen-thambi-182750271/" } },
                { id: 8, name: "Abhay Hari", role: "Controls Head", department: "Electrical", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 9, name: "Yash Bijalwan", role: "Driverless Head", department: "Driverless", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 10, name: "Sohon Kurian", role: "Management Head", department: "Management", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/sohonkurian/" } }
            ],

          general: [
                ]
        },
        hasCar:true
    },
    "2021-2022": {
        car: {
            name: "FMXX1",
            competitionCode:"04",
            type:"CV",
            customStat1: { label: "Torque", value: "53 Nm" },
            customStat2: { label: "Power", value: "79 BHP" },
            engine: "Honda CBR 600RR PC37, 2003 ",
            displacement:"600cc",
            induction:'53 Nm (torque)',
            powerOutput:'79 BHP',
            image:'./cars/fm21.jpg',
            description: "The FMXX1 exemplified our team's global ambitions, driven by a Honda CBR 600RR PC37 (2003) engine unleashing 79 BHP and 53Nm of torque in a durable AISI 1018 steel tubular spaceframe. Wrapped in vacuum-bagged carbon fiber bodywork, it conquered corners via double wishbone suspension (front pullrod, rear pushrod), adjustable Ackermann, versatile Drexler LSD with electropneumatic shifting, and Hoosier R25B slicks on Keizer rims—bolstered by titanium driveshafts and Motec M400 ECU with custom DAQ.",
            detailedSpecs: {
                chassis: "Tubular Spaceframe, Manufactured using AISI 1018 STEEL",
                body: "Vacuum bagged carbon fibre bodywork",
                brakes: " AP Racing master cylinders with ISR 4-piston front calipers, AP Racing 2-piston rear calipers, and floating SS hub-mounted rotors.",
                tires: "Keizer 10 aluminium wheel rims paired with self-designed 7075 aluminium wheel centres and Hoosier R25B slicks",
                transmission: "Drexler limited-slip differential with three torque-biasing ratios, electropneumatic shifting and clutching, and a 30:11 final drive with Grade 5 titanium driveshafts.",
                electronics: "Motec M400 ECU, Teensy 4.1 & STM32-based custom data acquisition system, and VectorNav VN-200 GPS-aided IMU.",
                suspension: "Double non-parallel unequal-length wishbones (front pullrod, rear pushrod) with adjustable Ackermann steering geometry.",
                ergonomics: "Fixed seat and steering wheel with adjustable pedal assembly, vacuum-bagged CFRP foam-core seat, and pneumatically actuated paddle-shift system with wheel-mounted buttons.",
        }
    },  
        achievements: {
            rank: "19th in Formula Student Germany",
            highlight: "6th in Business Plan presentation in FSG",
            points: "5th in Formula Bharat",
            teamPhoto: "./team/team21.jpeg",
            awards: [
                { title: "Overall Formula Student Germany Rank", value: "#19" },
                { title: "Overall Formula Bharat Rank", value: "#5" },
                { title: "Cost & Manufacturing Formula Bharat", value: "#2" },
                { title: "Business Plan Presentation", value: "#6" },
                { title: "Cost & Manufacturing", value: "#17" },
                { title: "Engineering Design", value: "#22" },
            ]
        },
        members: {
            board: [
                { id: 0, name: "Sameer Hate", role: "Team Manager", department: "Management", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/sameer-hate/" } },
                { id: 1, name: "Shubham", role: "CV Team Leader", department: "Management", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 2, name: "Nainesh Patel", role: "EV Team Leader", department: "Management", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/nainesh-patel15/" } },
            ],
            core: [
                { id: 0, name: "Vismay Vivekanand Nayak", role: "Structures Head", department: "Mechanical", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/vismay-nayak-846847190/" } },
                { id: 1, name: "Satya Sai Nithin Datla", role: "Aerodynamics & Composites Head", department: "Mechanical", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/satya-sai-nithin-datla/" } },
                { id: 2, name: "Parth Shingte", role: "E-Powertrain Head", department: "Electrical", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/parth-shingte-3b336619a/" } },
                { id: 3, name: "Kuna Abhinav", role: "Powertrain Head", department: "Electrical", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/kuna-abhinav-9906451b2/" } },
                { id: 4, name: "Yashaarth Kaushik", role: "Vehicle Dyanmics Head", department: "Mechanical", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/yashaarth-kaushik-91346318a/" } },
                { id: 5, name: "Krishnapal Jadeja", role: "Electronics and Controls Head", department: "Electrical", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/saksham-singh-khatkar-ab79a2230/" } },
                { id: 6, name: "Ameya Nitin Phadnis", role: "Driverless Head", department: "Driverless", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/anaypatil/" } },
                { id: 7, name: "Nishanth Nagesh Shetty", role: "Management Head", department: "Management", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
            ],
          general: [
                { id: 0, name: "Aditya Jain", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/dipsiteadi/" } },
                { id: 1, name: "Arjun Aravind", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/arjun-aravind-463608209/" } },
                { id: 2, name: "Bharadwaj Ongole", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/sai-bharadwaj-ongole-84a46b143/" } },
                { id: 3, name: "Uddhav Mahendra Pratap", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/uddhav-mahendra-pratap-46125621b/" } },
                { id: 4, name: "V.Kr.Venkatachalam", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/venkatachalam-krishnan-615b84245/" } },
                { id: 5, name: "Arnav Dabak", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/arnav-dabak/" } },
                { id: 6, name: "Ayush Lokare", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/ayushlokare6942/" } },
                { id: 7, name: "Bratish Saha", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/bratish-saha5279/" } },
                { id: 8, name: "Hassan Mohd Esa Lashkari", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/hassan-lashkari8251/" } },
                { id: 9, name: "M Laxmen", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/laxmen-murali-/" } },
                { id: 10, name: "Paramjit Singh", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/paramjit-singh/" } },
                { id: 11, name: "Parth Behede", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/parth-behede/" } }
                ]
        },
        hasCar:true
    },

    "2020-2021": {
        car: { ...defaultCarTemplate, name: "FM21", type: "CV", engine: "KTM 390", displacement: "373cc", powerOutput: "43 HP" },
        achievements: { ...defaultAchievementTemplate, rank: "Rank #22", highlight: "Virtual Statics Winner" },
        members: {
            board: [
                { id: 0, name: "Abhilash Ankola", role: "Team Manager", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/abhilash-ankola/" } },
                { id: 1, name: "Aayan Aziz", role: "CV Team Captain", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/aayan-aziz-b260a91aa/" } },
                { id: 2, name: "Vishesh Vikas Rane", role: "EV Team Captain", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } }
            ],

            general: [
                { id: 0,  name: "Abhijay Bhartur", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 1,  name: "Aditya Lakshmana Reddy Tetala", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/adityalakshmanareddytetala/" } },
                { id: 2,  name: "Aditya Shankar", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 3,  name: "Aditya Shridhar", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/aditya-shridhar/" } },
                { id: 4,  name: "Alish Dobariya", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/alish-dobariya/" } },
                { id: 5,  name: "Aman Gupta", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 6,  name: "Darsh Choksi", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/darsh-choksi-7521a3144/" } },
                { id: 7,  name: "Dhawal Samel", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/dhawal-samel/" } },
                { id: 8,  name: "Nishant Yala", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/nishant-yala/" } },
                { id: 9,  name: "Shubham Kumar Singh", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 10, name: "Siddhartha Singh", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/siddhartha-singh225/" } },
                { id: 11, name: "Vineet Maheshwari", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/vineet-maheshwari/" } },
                { id: 12, name: "Vyom Kumar", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/vyom-kumar-267527190/" } },
                { id: 13, name: "Aditya Jindal", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 14, name: "Ananth Nayak", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 15, name: "Arnav Dabak", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/arnav-dabak/" } },
                { id: 16, name: "Aryan Dubey", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 17, name: "Avinash Pawnday", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/avinash-pawnday-011955178/" } },
                { id: 18, name: "G S Mounik", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/srivatsamounikgarimella/details/experience/" } },
                { id: 19, name: "G Sushanth", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 20, name: "Isha Jain", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 21, name: "Kashyap Sorathia", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/kashyap-sorathiya-256b78170/" } },
                { id: 22, name: "Mohammad Riyan", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 23, name: "Mohi", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 24, name: "Nikhil Narang", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/nikhil-narang-55162b1b6/" } },
                { id: 25, name: "Rithesh Nayak", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/ritesh-nayak-03568120b/" } },
                { id: 26, name: "Sai Yashwanth Kandukuri", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/yashwanth-kandukuri/" } },
                { id: 27, name: "Samartha Kalbavi Rao", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/samartha-k-rao1/" } },
                { id: 28, name: "Shreyansh Goenka", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/shreyansh-goenka/" } },
                { id: 29, name: "Udit Rathee", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/udit-rathee15/" } },
                { id: 30, name: "Varun Sachdeva", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/varun-sachdeva-81a5b91a3/" } }
            ],
            core: [
                { id: 0, name: "Aditya Reddy", role: "Structure Head", department: "Structure", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 1, name: "Nainesh Patel", role: "Aerodynamics and Composites Head", department: "Aero-Composites", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 2, name: "Gautam Marathe", role: "Vehicle Dynamics Head (CV)", department: "Vehicle Dynamics", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 3, name: "Parth Gangrade", role: "Vehicle Dynamics Head (EV)", department: "Vehicle Dynamics", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 4, name: "Utkarsh Arya", role: "Engine Head", department: "Engine", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/utkarsh-arya-330321161/" } },
                { id: 5, name: "Saurabh Agarwala", role: "Transmission Head", department: "Transmission", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/saurabh-agarwala-165418192/" } },
                { id: 6, name: "Advait Tikle", role: "E - Powertrain Head", department: "E-Powertrain", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/advaitikle2000/" } },
                { id: 7, name: "Apratim Banerjee", role: "Electronics and Control Systems Head", department: "Electronics", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/banerjee-apratim/" } },
                { id: 8, name: "Shreyans Toshniwal", role: "Management Head", department: "Management", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/shreyans-toshniwal-179455171/" } },
                { id: 9, name: "Abrar Syed", role: "Driverless Head", department: "Driverless", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 10, name: "Abhishek Nain", role: "Manufacturing Head", department: "Manufacturing", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } }
],
        },
        hasCar:false
    },
    "2019-2020": {
        car: {
            name: "FM20",
            competitionCode:"02",
            type:"CV",
            customStat1: { label: "Torque", value: "53 Nm"},
            customStat2: { label: "Power", value: "79 BHP" },
            engine: "Honda CBR 600RR, PC 40 ",
            displacement:"",
            induction:'',
            powerOutput:'',
            image:'./cars/fm20.png',
            description: "The FM20 marked our team's evolution in precision engineering, propelled by a Honda CBR 600RR PC40 engine delivering 79 BHP and 53Nm of torque within a TIG-welded AISI 1018 steel tubular spaceframe. Enveloped in vacuum-bagged carbon fiber bodywork, it dominated dynamics with independent double-wishbone pull-rod suspension on Öhlins dampers, adjustable Ackermann, versatile Drexler LSD with electropneumatic shifting and titanium driveshafts, plus Hoosier R25B slicks on Keizer rims.",
            detailedSpecs: {
                chassis: "Steel tubular space frame chassis manufactured from AISI 1018 round steel tubing and TIG-welded using ER70-S6 low-carbon alloy steel filler.",
                body: "Vacuum bagged carbon fibre bodywork",
                brakes: "Front Brakes: ISR4-piston calipers, Rear Brakes: AP Racing 2-piston calipers",
                tires: "Keizer 10 aluminium wheel rims with aluminium 7075 self-designed wheel centres fitted with Hoosier R25B slicks.",
                transmission: "Drexler limited-slip differential with three torque-biasing ratio pairs, electropneumatic shifting and clutching, and a 30:11 final drive ratio with Grade 5 titanium driveshafts.",
                electronics: "MoTeC M400 ECU with NI myRIO and Mini M4 STM32 for data acquisition and telemetry, featuring an RPM LED display with auto-upshift and auto-clutch downshift driver aids.",
                suspension: "Independent double-wishbone pull-rod front and rear suspension with Öhlins dampers and adjustable Ackermann geometry.",
                ergonomics: "Fixed seat and steering wheel with fore-aft pedal adjustment of 25 mm, wet lay-up carbon seat with padded lumbar and knee protection, 60 mm Ethafoam head support, and 210-degree side visibility.",
        }
    },  
        achievements: {
            rank: "8th in Formula Bharat",
            highlight: "10 in Cost Event in Formula Bharat",
            points: "9 in Business Plan Presentation",
            teamPhoto: "./team/team19.jpeg",
            awards: [
                { title: "Overall Formula Bharat", value: "#9" },
                { title: "Cost & Manufacturing", value: "#3" },
                { title: "Engineering Design", value: "#21" },
            ]
        },
        members: {
          board: [],
          core: [],
          general: [
                    { id: 0, name: "Sujay Bhaumik", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/sujay-bhaumik-d12/" } },
                    { id: 1, name: "Aditya Shridhar", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/aditya-shridhar/" } },
                    { id: 2, name: "Sai Yashwanth Kandukuri", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/sai-yashwanth-kandukuri-17b40916a/" } },
                    { id: 3, name: "Nishant Yala", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/nishant-yala-bb594b166/" } },
                    { id: 4, name: "Aditya Shankar", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                    { id: 5, name: "Vyom Kumar", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/vyom-kumar-267527190/" } },
                    { id: 6, name: "G S Mounik", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/g-s-mounik-801185182/" } },
                    { id: 7, name: "Gourav Kumar Singh", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/gourav-kumar-singh-624168191/" } },
                    { id: 8, name: "Jomin Joseph Karukakalam", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                    { id: 9, name: "Aman Gupta", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/aman-ab-gupta/" } },
                    { id: 10, name: "Dhawal Samel", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/dhawal-samel-636941188/" } },
                    { id: 11, name: "Pranav Pawan Agrawal", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                    { id: 12, name: "Naman Agarwal", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/naman-agarwal-45815a181/" } },
                    { id: 13, name: "Shreyansh Goenka", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/shreyansh-goenka-469b89b3/" } },
                    { id: 14, name: "Kashyap Bagri", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/kashyap-bagri-bb9470171/" } },
                    { id: 15, name: "Siddhartha Singh", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/siddhartha-singh-02334a34/" } },
                    { id: 16, name: "Darsh Manoj Choksi", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/darsh-choksi-7521a3144/" } },
                    { id: 17, name: "Sarthak Naithani", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/sarthak-naithani-a610b6126/" } },
                    { id: 18, name: "Kevin Varghese Philip", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/kevin-philip-601570112/" } },
                    { id: 19, name: "Afraz K. Ashik", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/afraz-ashik-22558915a/" } },
                    { id: 20, name: "Preyaan Gupta", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/preyaan-gupta-0654a5193/" } }
                ]
            },
    },
    "2019e-2020e": {
        car: {
            name: "FM20e",
            competitionCode: "E03",
            type: "EV",
            customStat1: { label: "Voltage", value: "600V" },
            customStat2: { label: "Weight", value: "255kg" },
            motor: "Liquid Cooled EMRAX 208 HV",
            battery: "6.6 kWh Custom Pack",
            voltage: "600V MAX",
            image:'./cars/fm20e.jpeg',
            description: "The FM20e ignited our team's electric era as our first EV, unleashing 80 kW and 140 Nm from a liquid-cooled EMRAX 208 motor within a 255kg TIG-welded AISI 1018 steel tubular spaceframe. Powered by a 7.7 kWh air-cooled Molicel P42A pack (352.8V nominal, 600V max), it sliced through corners with vacuum-bagged carbon bodywork, double wishbone pullrod suspension on adjustable Ackermann, epicyclic 4.5:1 planetary transmission with titanium half-shafts,",
            detailedSpecs: {
                chassis: "Steel tubular space frame chassis manufactured from AISI 1018 round steel tubing and TIG-welded using ER70-S6 low-carbon alloy steel filler.",
                body: "Vacuum bagged carbon fibre bodywork",
                powertrain: "Water-cooled EMRAX 208 producing 80 kW peak power and 140 Nm peak torque, paired with an air-cooled accumulator of 84 EPS cells in an 84S1P configuration delivering up to 352.8 V and 7.7 kWh capacity.",
                brakes: "Front brakes with ISR 4-piston calipers and rear brakes with AP Racing 2-piston calipers.",
                tires: "Keizer 10 aluminium wheel rims paired with self-designed 7075 aluminium wheel centres and Hoosier R25B slicks",
                transmission: "Epicyclic planetary gearbox with a 4.5:1 gear ratio, titanium half-shafts with tripod CV joints, and a machined 7-series aluminium spool with matching spool mounts.",
                electronics: "RMS PM100DZ motor controller with a robust fault-tolerant IGBT stage and active DC-link discharge, paired with a custom LTC-based BMS featuring efficient self-developed cell balancing and a custom data acquisition system with inverter data logging.",
                suspension: "A double non-parallel unequal-length wishbone suspension with pullrod actuation, paired with adjustable Ackermann steering geometry, enables precise handling and tunability",
                ergonomics: "A fixed seat and steering wheel with an adjustable pedal assembly, featuring a resin-infused carbon-fibre seat with PVC padding at the shoulders and base, provide a stable yet ergonomic driver fit"
            }
        },
        achievements: {
            rank: "6th in Formula Bharat",
            highlight: "First EV Car",
            points: "6th in Business Plan presentation",
            teamPhoto: "./team/team19e.jpeg",
            awards: [
                { title: "Overall Rank", value: "#6" },
                { title: "Business Plan presentation", value: "#6" },
                { title: "Engineering Design", value: "#4" },
            ]
        },
    members: {
          board: [],
          core: [],
          general: [
                    { id: 0, name: "Avinash Pawnday", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/avinash-pawnday-011955178/" } },
                    { id: 1, name: "Dipayan Maji", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/dipayan-maji-15153a149/" } },
                    { id: 2, name: "Aditya Poddar", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/aditya-poddar-571011123/" } },
                    { id: 3, name: "Vasudeo Rateria", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/vasudeorateria98/" } },
                    { id: 4, name: "Pratik Mohanty", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/pratik-mohanty-830a31157/" } },
                    { id: 5, name: "Anirudh Sivakumar", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/anirudh-sivakumar-35238a180/" } },
                    { id: 6, name: "Cherukuri Manideep", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/manideepcherukuri1999/" } },
                    { id: 7, name: "Udit Rathee", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/udit-rathee15/" } },
                    { id: 8, name: "Satyam Pratap Singh", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                    { id: 9, name: "T Sri Khyati", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/sri-khyati-694b51158/" } },
                    { id: 10, name: "Vineet Maheshwari", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/vineet-maheshwari/" } },
                    { id: 11, name: "Pranshul Pandey", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                    { id: 12, name: "Sasank Potluri", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                    { id: 13, name: "Kartikey Saini", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/kartikeysaini" } },
                    { id: 14, name: "Naman Johri", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/naman-johri-627618165/" } },
                    { id: 15, name: "Sriram S", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                    { id: 16, name: "Toshit Jhunjhunwala", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/toshitjhunjhunwala/" } },
                    { id: 17, name: "Abhinav Sirohi", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                    { id: 18, name: "Moh", role: "", department: "Electric", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/mohi-madhu/" } }
                    ],
            },
    },

    "2018-2019": {
        car: {
            name: "FMX8",
            competitionCode:"68",
            type:"CV",
            customStat1: { label: "Record Acceleration", value: "4.19s" },
            customStat2: { label: "Power", value: "79 BHP" },
            engine: "Honda CBR 600RR PC37, 2003 ",
            displacement:"600cc",
            induction:'53 Nm (torque)',
            powerOutput:'79 BHP',
            image:'./cars/fm18_68.jpeg',
            description: "The FMX8 epitomized our team's speed and strategy, roaring with a Honda CBR 600RR PC37 (2003) engine's 79 BHP and 53Nm torque through a fusion-welded Chromoly 4130 steel tubular spaceframe clad in in-house vacuum-bagged carbon fiber. It blitzed acceleration in 4.19s via independent double-wishbone suspension (pullrod front, pushrod rear) on Öhlins dampers, adjustable Ackermann, 6-speed sequential Drexler LSD (six bias ratios) with electropneumatic titanium-shafted shifting",
            detailedSpecs: {
                chassis: "Front and rear single-piece tubular space frame made of Chromoly 4130 steel, fusion welded using ER70-S6 filler, with in-house vacuum-bagged carbon fibre bodywork.",
                body: "",
                brakes: "Floating rotor braking system with ISR CP 22-048 OC front calipers and PS1 Wilwood rear calipers.",
                tires: "Hoosier 18 × 7.5 × 10 racing slicks mounted on 10-inch Keizer rims with aluminium wheel centers.",
                transmission: "6-speed sequential gearbox with Drexler clutch-pack type limited slip differential featuring six torque biasing ratios, and electropneumatic clutching and shifting with titanium driveshafts.",
                electronics: "Equipped with a MoTeC M400 ECU and AiM EVO4 data logger integrated with myRIO.",
                suspension: "Independent double-wishbone suspension with pullrod front and pushrod rear setup, Öhlins dampers, and adjustable Ackermann steering.",
                ergonomics: "Fixed seat and steering wheel with fore-aft pedal adjustment of 25 mm, wet lay-up carbon seat with padded lumbar and knee protection, 60 mm Ethafoam head support, and 210-degree side visibility.",
        }
    },  
        achievements: {
            rank: "3rd in Formula Bharat",
            highlight: "1st in Business Plan presentation in Formula Bharat",
            points: "",
            teamPhoto: "./team/team18.jpeg",
            awards: [
                { title: "Overall Formula Bharat Rank", value: "#5" },
                { title: "Overall Formula Student Austria Rank", value: "#26" },
                { title: "Acceleration Formula Bharat", value: "#1" },
                { title: "Endurance Formula Bharat", value: "#3" },
            ]
        },
      members: {
          board: [],
          core: [],
          general: [
              { id: 0, name: "Shivam Gupta", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/guptashivam1996/" } },
              { id: 1, name: "Rithwik Srinivas Ennamuri", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/rithwik-srinivas-ennamuri-94457534/" } },
              { id: 2, name: "Karan Kumar", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/karan-kumar-8a0b6a122/" } },
              { id: 3, name: "Priyaj Mehta", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/priyaj-mehta/" } },
              { id: 4, name: "Aditya Purohit", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/aditya-purohit-14b603153/" } },
              { id: 5, name: "Aditya Narsinghpura", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/aditya-narsinghpura-076561160/" } },
              { id: 6, name: "Harsh Gupta", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
              { id: 7, name: "Pranshul Gupta", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/pranshul-gupta123/" } },
              { id: 8, name: "Syed Hussam", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/syedhusam/" } },
              { id: 9, name: "Alish Dobariya", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/alish-dobariya/" } },
              { id: 10, name: "Sharanpreet Singh Virk", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
              { id: 11, name: "Rahul Rao", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
              { id: 12, name: "Kislaya Aakash", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/kislaya-aakash-06b026128/" } },
              { id: 13, name: "Zeba Jabbar", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/zeba-jabbar-1b0678160/" } },
              { id: 14, name: "Tushar Gupta", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/tushar-gupta-6aa09940/" } },
              { id: 15, name: "Yash Walekar", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/yash-walekar-773335132/" } },
              { id: 16, name: "Vasudev Gupta", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/vasudev-gupta/" } }
          ],
      },
    },
    "2017-2018": {
        car: {
            name: "FMX8",
            competitionCode:"96",
            type:"CV",
            customStat1: { label: "Torque", value: "57 Nm" },
            customStat2: { label: "Power", value: "79 BHP" },
            engine: "HONDA CBR600 RR PC37",
            displacement:"",
            induction:'57 Nm (torque)',
            powerOutput:'79 BHP',
            image:'./cars/fm18_2.jpg',
            description: "The FMX8 harnessed our team's meticulous craftsmanship, surging with a Honda CBR600 RR PC37 engine's 79 BHP and 57Nm torque via a fusion-welded Chromoly 4130 steel tubular spaceframe draped in in-house vacuum-bagged carbon fiber. It carved precise lines with independent double-wishbone suspension (pullrod front, pushrod rear) on Öhlins dampers, adjustable Ackermann, 6-speed sequential Drexler LSD (six bias ratios) featuring electropneumatic titanium-shafted shifting, Hoosier slicks on Keizer rims, and ISR/Wilwood floating brakes.",
            detailedSpecs: {
                chassis: "Front and rear single-piece tubular space frame made of Chromoly 4130 steel, fusion welded using ER70-S6 filler, with in-house vacuum-bagged carbon fibre bodywork.",
                body: "",
                brakes: "Floating rotor braking system with ISR CP 22-048 OC front calipers and PS1 Wilwood rear calipers.",
                tires: "Hoosier 18 × 7.5 × 10 racing slicks mounted on 10-inch Keizer rims with aluminium wheel centers.",
                transmission: "6-speed sequential gearbox with Drexler clutch-pack type limited slip differential featuring six torque biasing ratios, and electropneumatic clutching and shifting with titanium driveshafts.",
                electronics: "Equipped with a MoTeC M400 ECU and AiM EVO4 data logger integrated with myRIO.",
                suspension: "Independent double-wishbone suspension with pullrod front and pushrod rear setup, Öhlins dampers, and adjustable Ackermann steering.",
                ergonomics: "Fixed seat and steering wheel with fore-aft pedal adjustment of 25 mm, wet lay-up carbon seat with padded lumbar and knee protection, 60 mm Ethafoam head support, and 210-degree side visibility.",
        }
    },  
        achievements: {
            rank: "26th in FS Austria",
            highlight: "21 in Cost Event",
            points: "14th in Engineering Design",
            teamPhoto: "./team/team17.jpeg",
            awards: [
                { title: "Overall FS Austria Rank", value: "#26" },
                { title: "Cost and Manufacturing Event", value: "#21" },
                { title: "Business Plan Presentation", value: "#25" },
                { title: "Engineering Design", value: "#14" },
            ]
        },
        members: { 
            board: [],
            core: [],
            general: [
                { id: 0, name: "Ayush Garg", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/ayushg97/" } },
                { id: 1, name: "Rakshith Ramesh", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://fr.linkedin.com/in/rakshith9" } },
                { id: 2, name: "Tushar Singh Jamwal", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/tushar-jamwal/" } },
                { id: 3, name: "Rabsimran Gulati", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/rabsimran-gulati" } },
                { id: 4, name: "Prashanth Agarwal", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/prashantagarwl" } },
                { id: 5, name: "Chirag Rajopadhye", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/chirag-r-a7055b35/" } },
                { id: 6, name: "Mahir Seth", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/mahir-sheth/" } },
                { id: 7, name: "Akhil Reddy", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/akhil-reddy-amar/" } },
                { id: 8, name: "Utkarsh Pandey", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/utkarsh-pandey-2b2381112/" } },
                { id: 9, name: "Sudarshan Gupta", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/sudarshan-gupta-867227111/" } },
                { id: 10, name: "Shantanu Shivankar", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/shantanu-shivankar" } },
                { id: 11, name: "Vasudev Purohit", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/vasudevpurohit" } },
                { id: 12, name: "Yash Sinha", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/yash-sinha-1012/" } },
                { id: 13, name: "Shreyas Anand", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/shreyasanand1996" } },
                { id: 14, name: "Manthan Vidiya", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 15, name: "Animesh Mishra", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/animeshmishra316" } },
                { id: 16, name: "Ayush Goel", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/ayush-goel-57b710123" } },
                { id: 17, name: "Saharsh Bansal", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/saharsh-bansal-1709" } },
                { id: 18, name: "D Dhruva Datta Reddy", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/dhruva-reddy/" } },
                { id: 19, name: "Animesh Joshi", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/animesh-joshi-b42550139" } },
                { id: 20, name: "Deepen Solanki", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/deepen-solanki" } },
                { id: 21, name: "Ashutosh Bhat", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/ashutoshbhatt19" } },
                { id: 22, name: "Saideep Konreddy", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 23, name: "Ayush Jha", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/ayush-jha-7150b65b" } },
                { id: 24, name: "Vasu Prakash Srivastav", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/vasu-srivastava-b33447112/" } },
                { id: 25, name: "Aman Bhasin", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/aman-bhasin-9b077313b/" } },
                { id: 26, name: "Shaurya Naman Singh", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/shauryanamansingh" } },
                { id: 27, name: "Shubham Raizada", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/shubham-raizada-7222a010b" } },
                { id: 28, name: "Disha Agarwal", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 29, name: "Nipun Bhanot", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 30, name: "Akshat Saxena", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/akshat-saxena-b564b6135" } },
                { id: 31, name: "Shuvam Jaiswal", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/shuvam-jaiswal/" } },
                { id: 32, name: "Shreyas Y Pai B", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 33, name: "Gurmehar Singh Bakshi", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/gurmehar-bakshi-098a06b5" } },
                { id: 34, name: "Arindam Baruah", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/arindam-baruah-310845140/?originalSubdomain=in" } },
                { id: 35, name: "Palash Sapra", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/palash-sapra" } },
                { id: 36, name: "Navaneeth Ganesh", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/navaneethcrshna" } },
                { id: 37, name: "Niteesha Ravela", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 38, name: "Aftab Mohammed", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/aftab-mohammed-0372767a" } },
                { id: 39, name: "Ayush Sisodia", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/ayush-sisodia-649195121" } },
                { id: 40, name: "Piyush Shukla", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/piyush-shukla-0896" } },
                { id: 41, name: "Avnish Sachar", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/avnishsachar" } },
                { id: 42, name: "Aman Anurag", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 43, name: "Anjali R Warrier", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/anjalirwarrier" } },
                { id: 44, name: "Revanth Venkateshwar", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/revanth-venkateswar-688708118" } },
                { id: 45, name: "Abhilash Arora", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/aroraabhilash" } },
                { id: 46, name: "Karan Kumar", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://se.linkedin.com/in/karan-kumar-8a0b6a122" } },
                { id: 47, name: "Siddhant S Shah", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/siddhant-s-shah" } }
                ],
            },
    },
    "2016-2017": {
            car: {
            name: "FMX6",
            competitionCode:"296/C01",
            type:"CV",
            customStat1: { label: "Torque", value: "57 Nm" },
            customStat2: { label: "Power", value: "79 BHP" },
            engine: "HONDA CBR600 RR PC37",
            displacement:"",
            induction:'57 Nm (torque)',
            powerOutput:'79 BHP',
            image:'./cars/fm16.jpg',
            description: "The FMX6 propelled our team onto the global stage, powered by a Honda CBR600 RR PC37 engine's 79 BHP and 57Nm torque through a fusion-welded Chromoly 4130 steel tubular spaceframe wrapped in in-house vacuum-bagged carbon fiber. It tackled tracks with independent double-wishbone suspension (pullrod front, pushrod rear) on Öhlins dampers, adjustable Ackermann, 6-speed sequential Drexler LSD (six bias ratios) with electropneumatic titanium-shafted shifting, Hoosier slicks on Keizer rims, and ISR/Wilwood floating brakes.",
            detailedSpecs: {
                chassis: "Front and rear single-piece tubular space frame made of Chromoly 4130 steel, fusion welded using ER70-S6 filler, with in-house vacuum-bagged carbon fibre bodywork.",
                body: "",
                brakes: "Floating rotor braking system with ISR CP 22-048 OC front calipers and PS1 Wilwood rear calipers.",
                tires: "Hoosier 18 × 7.5 × 10 racing slicks mounted on 10-inch Keizer rims with aluminium wheel centers.",
                transmission: "6-speed sequential gearbox with Drexler clutch-pack type limited slip differential featuring six torque biasing ratios, and electropneumatic clutching and shifting with titanium driveshafts.",
                electronics: "Equipped with a MoTeC M400 ECU and AiM EVO4 data logger integrated with myRIO.",
                suspension: "Independent double-wishbone suspension with pullrod front and pushrod rear setup, Öhlins dampers, and adjustable Ackermann steering.",
                ergonomics: "Fixed seat and steering wheel with fore-aft pedal adjustment of 25 mm, wet lay-up carbon seat with padded lumbar and knee protection, 60 mm Ethafoam head support, and 210-degree side visibility.",
        }
    },  
        achievements: {
            rank: "16th in FS Czech Republic",
            highlight: "9th in Formula Bharat",
            points: "Went to FS Germany and FS Czech Republic",
            teamPhoto: "./team/team16.jpeg",
            awards: [
                { title: "Overall FS Czech Republic Rank", value: "#16" },
                { title: "Overall FS Germany", value: "#58" },
                { title: "Overall Formula Bharat", value: "#9" },
                { title: "Cost Event in FS Czech Republic", value: "#5" },
                { title: "Acceleration in FS Czech Republic", value: "#11" },
                { title: "Engineering Design in Formula Bharat", value: "#3" },
                { title: "Business Plan in Formula Bharat", value: "#12" },
            ]
        },
        members: { 
            board: [],
            core: [],
            general: [
                { id: 0, name: "Nalam Tinu Manish", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/tinu-manish-nalam" } },
                { id: 1, name: "Revanth Divakar", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/revanth-divakar-724859a0" } },
                { id: 2, name: "Rishabh Singh Jakhar", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://nl.linkedin.com/in/rishabhsinghjakhar" } },
                { id: 3, name: "Shreyansh Anil", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/shreyanshanil1" } },
                { id: 4, name: "Prakhar Gupta", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/prakharkalyangupta" } },
                { id: 5, name: "Nikhil Mydam", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/nikhilmyadam3/" } },
                { id: 6, name: "Vardan Mishra", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/vardan-mishra-81bba8116" } },
                { id: 7, name: "Vivek Thota", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/vivekthota6" } },
                { id: 8, name: "Atishay", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/atishay197" } },
                { id: 9, name: "Rupak Dhankar", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://nl.linkedin.com/in/rupak13fm" } },
                { id: 10, name: "Abhinav Sharma", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://uk.linkedin.com/in/abhinav0160" } },
                { id: 11, name: "Sunesh Agarwal", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/sunesh-agarwal" } },
                { id: 12, name: "Sai Rajeev Devaragudi", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/rajeev-devaragudi-8306909b" } },
                { id: 13, name: "Saurav Agarwal", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/saurav-agarwal-7928957b" } },
                { id: 14, name: "Sanket Rastogi", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/sanketrastogi" } },
                { id: 15, name: "Rahul Sivakumar", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/rahul-sivakumar-73850b86" } },
                { id: 16, name: "Armaan", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/armaan9995/" } },
                { id: 17, name: "Akash Raghuvanshi", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 18, name: "Dipesh Rohan", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/dipeshrohan/detail/contact-info/" } },
                { id: 19, name: "Sonu John Kuriakose", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/sonujohnkuriakose/" } },
                { id: 20, name: "Utkarsh Ahuja", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/utahuja/" } },
                { id: 21, name: "Aravind Vissamshetty", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/aravindvissamsetty/" } }
                ],
            },
    },
    "2014-2015": {
        car: {
            name: "FMX4",
            competitionCode:"77", // have to ask
            type:"CV",
            customStat1: { label: "Torque", value: "57 Nm" },
            customStat2: { label: "Power", value: "79 BHP" },
            engine: "HONDA CBR600 RR (2006)",
            displacement:"",
            induction:'57 Nm (torque)',
            powerOutput:'79 BHP',
            image:'./cars/fm14.jpg',
            description: "The FMX4 embodied our team's foundational grit, driven by a Honda CBR600 RR (2006) engine's 79 BHP and 57Nm torque via a fusion-welded Chromoly 4130 steel tubular spaceframe with CFRP bodywork. It gripped asphalt with double unequal-length A-arm pushrod suspension (14.86 N/mm front, 26.41 N/mm rear progressive rates), 6-speed sequential Drexler LSD (six bias ratios) featuring electropneumatic titanium-shafted shifting, Hoosier 20.5x7x13 slicks on magnesium-center Keizer 13-inch rims, and ISR/Wilwood floating brakes.",
            detailedSpecs: {
                chassis: "Front and rear single piece tubular space frame and fusion Welding ER70-S6filler with chromoly 4130 steel and CFRP body",
                body: "",
                brakes: "Floating rotor braking system with ISR CP 22-048 OC front calipers and PS1 Wilwood rear calipers.",
                tires: "Hoosier 20.5 × 7 × 13 racing slicks mounted on 13-inch Aluminum Rim – Magnesium center Keizer wheels.",
                transmission: "6-speed sequential gearbox with Drexler clutch-pack type limited slip differential featuring six torque biasing ratios, and electropneumatic clutching and shifting with titanium driveshafts.",
                electronics: "",
                suspension: "Suspension Type is a  double unequal length A-Arm and push rod actuated horizontally oriented spring and damper with front wheel Rate 14.86 N/mm and rear wheel rate 26.41N/mm with motion ratio as progressive type",
                ergonomics: "Fixed seat and steering wheel with fore-aft pedal adjustment of 25 mm, wet lay-up carbon seat with padded lumbar and knee protection, 60 mm Ethafoam head support, and 210-degree side visibility.",
        }
    },  
        achievements: {
            rank: "60th in FS Germany",
            highlight: "31 in Cost Event in FSG",
            points: "34 in Business Plan Presentation",
            teamPhoto: "./team/team14.jpeg",
            awards: [
                { title: "Overall FS Germany", value: "#60" },
                { title: "Engineering Design", value: "#58" },
                { title: "Cost Event in FS Czech Republic", value: "#31" },
            ]
        },
        members: { 
            board: [],
            core: [],
            general: [
                { id: 0, name: "Ayush Prakash", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 1, name: "Tanmay Bohra", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/tanmaybohra7" } },
                { id: 2, name: "Akshay Dhawan", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://ca.linkedin.com/in/akshaydhawan710" } },
                { id: 3, name: "Haider Nawab Mirza", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/haider-mirza-121b76104/" } },
                { id: 4, name: "Karan Khazanchi", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/karan-khazanchi-7a515073?trk=pub-pbmap" } },
                { id: 5, name: "Srujan Naarsing", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 6, name: "Sumeet Shisodia", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/sumeet-shisodia-4411a674" } },
                { id: 7, name: "Vaibhav Sharma", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/vaibhavsharma1993" } },
                { id: 8, name: "Saurav Moitra", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/saurav-maitra-110a9090" } },
                { id: 9, name: "Rohan Mathur", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/rohanm94" } },
                { id: 10, name: "B. S. Gopal", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/saigopalboyana/" } },
                { id: 11, name: "Saurav Gulati", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/saurav-gulati-91bb84102" } },
                { id: 12, name: "Supreeth Gaddamsetty", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/supreeth-gadamsetty-44b130a5/" } },
                { id: 13, name: "Kanishk Singh", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/kanishksingh94" } },
                { id: 14, name: "Arsh Jaiswal", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/arshjaiswal" } },
                { id: 15, name: "Rohith Maben", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://se.linkedin.com/in/rohithmaben" } },
                { id: 16, name: "Vakul Joshi", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/vakul-joshi-076880b4" } },
                { id: 17, name: "Ayaan Banerji", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/ayan-banerjee-64a2425b" } },
                { id: 18, name: "Kamaljit Deka", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/kamaljit-deka" } },
                { id: 19, name: "Anand Raj", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/anand-raj-6610a86b/" } },
                { id: 20, name: "Sayi Kumar", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/sayi-kumar-594b79139/" } },
                { id: 21, name: "R. P Sharat", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/sharat-rp/" } },
                { id: 22, name: "Rangaraj Srikant", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/rangaraj-srikanth-44811858" } },
                { id: 23, name: "Dhaval Patange", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/dhaval-patange" } },
                { id: 24, name: "Mit Desai", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/mitdesai0805" } },
                { id: 25, name: "Chandan Kumar Singh", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/chandan-kumar-singh-b9aaa869" } },
                { id: 26, name: "Debanjana Banerjee", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/debanjanabanerjee" } }
                ],
            },
    },
    "2013-2014": {
         car: {
            name: "FMX3",
            competitionCode:"96",
            type:"CV",
            customStat1: { label: "Torque", value: "57 Nm" },
            customStat2: { label: "Power", value: "79 BHP" },
            engine: "HONDA CBR600 RR (2006)",
            displacement:"",
            induction:'57 Nm (torque)',
            powerOutput:'79 BHP',
            image:'./cars/fm13.jpg',
            description: "The FMX3 forged our team's early resolve, fueled by a Honda CBR600 RR (2006) engine's 79 BHP and 57Nm torque in a fusion-welded Chromoly 4130 steel tubular spaceframe with CFRP bodywork. It navigated challenges via double unequal-length A-arm pushrod suspension (14.86 N/mm front, 26.41 N/mm rear progressive rates), 6-speed sequential Drexler LSD (six bias ratios) with electropneumatic titanium-shafted shifting, Hoosier 20.5x7x13 slicks on magnesium-center Keizer 13-inch rims, and PS1 Wilwood disc brakes with CNC aluminum uprights.",
            detailedSpecs: {
                chassis: "Front and rear single piece tubular space frame and fusion Welding ER70-S6filler with chromoly 4130 steel and CFRP body",
                body: "",
                brakes: "Front and rear rotors have a disc brake system with PS1 Wilwood calipers, an upright assembly of CNC 6351 T6 with an Al, Integral caliper and wheel speed sensor mount",
                tires: "Hoosier 20.5 × 7 × 13 racing slicks mounted on 13-inch Aluminum Rim – Magnesium center Keizer wheels.",
                transmission: "6-speed sequential gearbox with Drexler clutch-pack type limited slip differential featuring six torque biasing ratios, and electropneumatic clutching and shifting with titanium driveshafts.",
                electronics: "",
                suspension: "Suspension Type is a  double unequal length A-Arm and push rod actuated horizontally oriented spring and damper with front wheel Rate 14.86 N/mm and rear wheel rate 26.41N/mm with motion ratio as progressive type",
                ergonomics: "Fixed seat and steering wheel with fore-aft pedal adjustment of 25 mm, wet lay-up carbon seat with padded lumbar and knee protection, 60 mm Ethafoam head support, and 210-degree side visibility.",
        }
    },  
        achievements: {
            rank: "51st in FS Germany",
            highlight: "2 in Cost Event in FSG",
            points: "49 in Business Plan Presentation",
            teamPhoto: "./team/team13.jpeg",
            awards: [
                { title: "Overall FS Germany", value: "#51" },
                { title: "Acceleration", value: "#43" },
                { title: "Engineering Design", value: "#55" },
                { title: "Skidpad", value: "#49" },
                { title: "Autocross", value: "#52" },
            ]
        },
        members: { 
            board: [],
            core: [],
            general: [
                  { id: 0, name: "Aakhilesh Singhania", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/aakhilesh-singhania-92669670" } },
                    { id: 1, name: "Rishu Raj Singh", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                    { id: 2, name: "Vinay Reddy", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                    { id: 3, name: "Anshul Chawla", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/anshul-chawla-656b19159" } },
                    { id: 4, name: "Sohail Shaik Mohammad", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/mohammad-sohail-shaik-5492a7a4/" } },
                    { id: 5, name: "Tushar Kant Roy", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/tusharkantroy" } },
                    { id: 6, name: "Shivam Gupta", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/guptashivam91/" } },
                    { id: 7, name: "Saurav Kumar Singh", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/sauravsingh3393/?originalSubdomain=in" } },
                    { id: 8, name: "Manjira Das", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/manjira-das-168b5b53/?originalSubdomain=in" } },
                    { id: 9, name: "Chinmay Khandalkar", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/chinmay-khandalkar/?originalSubdomain=fr" } },
                    { id: 10, name: "Pranay Raj Singh", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/prasng/" } },
                    { id: 11, name: "Avra Banerjee", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/avra-banerjee-17840679/?originalSubdomain=in" } },
                    { id: 12, name: "Sumit Agarwal", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/sumit-agrawal-26b1741b/" } },
                    { id: 13, name: "Himanshu Goyal", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/himanshu-goyal-b7103754/?originalSubdomain=in" } },
                    { id: 14, name: "Yash Uppal", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/yashuppal/" } },
                    { id: 15, name: "Mridul Chirania", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/mridul-chirania-0b650982/?originalSubdomain=in" } },
                    { id: 16, name: "Pulkit Arora", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/pulkit-arora-a7900780/?originalSubdomain=in" } },
                    { id: 17, name: "Heerak Thakar", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/heerak-thakar/" } },
                    { id: 18, name: "Sidhant Ray", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/sidhant-ray-b9235580/" } },
                    { id: 19, name: "Siddharth Prakash", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/siddharthprakash/" } },
                    { id: 20, name: "Nakul Goyal", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/goyalnakul/" } },
                    { id: 21, name: "Kedar Nath", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/kedarnath-moparthi-84b13b54/?originalSubdomain=se" } },
                    { id: 22, name: "Sudhakar Ayila", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/sudhakar-ayila-7098169b/" } },
                    { id: 23, name: "Dheemanth Roy", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/dheemanthuppalapati/" } },
                    { id: 24, name: "Prasun Dubey", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/prasun-dubey-a8a007105/?originalSubdomain=in" } },
                    { id: 25, name: "Abhay Maheshwari", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/maheshwariabhay/" } },
                    { id: 26, name: "Anshu Sinha", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/anshu-sinha-39243919/?originalSubdomain=in" } }
                ],
            },
    },
    "2011-2012": {
            car: {
            name: "FMX1",
            competitionCode:"69",
            type:"CV",
            customStat1: { label: "Torque", value: "57 Nm" },
            customStat2: { label: "Power", value: "79 BHP" },
            engine: "HONDA CBR600 RR (2006)",
            displacement:"",
            induction:'57 Nm (torque)',
            powerOutput:'79 BHP',
            image:'./cars/fm11.jpg',
            description: "The FMX1 ignited our team's motorsport journey, surging with a Honda CBR600 RR (2006) engine's 79 BHP and 57Nm torque through a fusion-welded Chromoly 4130 steel tubular spaceframe clad in FRP bodywork. It mastered dynamics via double unequal-length A-arm pushrod suspension (14.86 N/mm front, 26.41 N/mm rear progressive rates), 6-speed sequential Drexler LSD (six bias ratios) with electropneumatic titanium-shafted shifting.",
            detailedSpecs: {
                chassis: "Front and rear single piece tubular space frame and fusion Welding ER70-S6filler with chromoly 4130 steel and FRP body",
                body: "",
                brakes: "Front and rear rotors have a disc brake system with PS1 Wilwood calipers, an upright assembly of CNC 6351 T6 with an Al, Integral caliper and wheel speed sensor mount",
                tires: "Hoosier 20.5 × 7 × 13 racing slicks mounted on 13-inch Aluminum Rim – Magnesium center Keizer wheels.",
                transmission: "6-speed sequential gearbox with Drexler clutch-pack type limited slip differential featuring six torque biasing ratios, and electropneumatic clutching and shifting with titanium driveshafts.",
                electronics: "",
                suspension: "Suspension Type is a  double unequal length A-Arm and push rod actuated horizontally oriented spring and damper with front wheel Rate 14.86 N/mm and rear wheel rate 26.41N/mm with motion ratio as progressive type",
                ergonomics: "Fixed seat and steering wheel with fore-aft pedal adjustment of 25 mm, wet lay-up carbon seat with padded lumbar and knee protection, 60 mm Ethafoam head support, and 210-degree side visibility.",
        }
    },  
        achievements: {
            rank: "42nd in FS Italy",
            highlight: "16 in Cost Event in FS Italy",
            points: "28 in Business Plan Presentation",
            teamPhoto: "./team/team11.jpeg",
            awards: [
                { title: "Overall FS Italy", value: "#42" },
                { title: "Cost Event", value: "#16" },
                { title: "Engineering Design", value: "#44" },
                { title: "Business Plan Presentation", value: "#28" },

            ]
        },
        members: { 
            board: [],
            core: [],
            general: [
                { id: 0, name: "Swayam Ray", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/swayamray/" } },
                { id: 1, name: "Kushal Kumar", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/kushal-kumar-3b706a4a" } },
                { id: 2, name: "Mohammad Wasim Afzal", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/wasimafzal" } },
                { id: 3, name: "E.R.Subramanian", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/subramanianer/" } },
                { id: 4, name: "Prachee Priyadarshinee", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://sg.linkedin.com/in/pracheepriyadarshinee" } },
                { id: 5, name: "Aditya Malhotra", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/aditya-malhotra-0123b1158" } },
                { id: 6, name: "Kavish Sisodia", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/kavish-sisodia-7675a362" } },
                { id: 7, name: "Vishnu Raveen", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/raveenv" } },
                { id: 8, name: "Shubham Jha", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/shubham-jha-34979665" } },
                { id: 9, name: "Kinshuk Panda", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/kinshuk-panda-801825157" } },
                { id: 10, name: "Anurag Atmakuri", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/anuragatmakuri" } },
                { id: 11, name: "Taussif Hussain Umarsab Mujawar", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/tausiffhussain-mujawar-67a95618/" } },
                { id: 12, name: "Dhruv Mohan", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/dhruv-mohan-9361899a" } },
                { id: 13, name: "Divya Elizabeth Thomas", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/divyaelizabeththomas" } },
                { id: 14, name: "Bhanu Dua", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/bhanu-dua-82263bb8" } },
                { id: 15, name: "Thrilok Nagamalla", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/thriloknagamalla" } },
                { id: 16, name: "Nrupen Upadhyayula", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://lu.linkedin.com/in/nrupen-upadhyayula-1ab8a541" } },
                { id: 17, name: "Jimmy Cherian", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/jimmycherian/" } },
                { id: 18, name: "Surabhi Kanga", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/surabhikanga" } },
                { id: 19, name: "Hardik Popli", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/hardikpopli" } },
                { id: 20, name: "Divesh Nathani", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/divesh-nathani-2822b356" } },
                { id: 21, name: "Nishad Sabnis", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 22, name: "Akshat Gattani", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 23, name: "Divesh Nathani", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://in.linkedin.com/in/divesh-nathani-2822b356" } },
                { id: 24, name: "Nishan Narona", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } }
                ],
            },
    },
    "2010-2011": {
        car: {
            name: "FMX",
            competitionCode:"99",
            type:"CV",
            customStat1: { label: "Torque", value: "57 Nm" },
            customStat2: { label: "Power", value: "79 BHP" },
            engine: "HONDA CBR600 RR (2006)",
            displacement:"",
            induction:'57 Nm (torque)',
            powerOutput:'79 BHP',
            image:'./cars/fm10.jpg',
            description: "The FMX launched our team's legacy, surging with a Honda CBR600 RR (2006) engine's 79 BHP and 57Nm torque through a fusion-welded Chromoly 4130 steel tubular spaceframe clad in FRP bodywork. It pioneered precision via double unequal-length A-arm pushrod suspension (14.86 N/mm front, 26.41 N/mm rear progressive rates), 6-speed sequential Drexler LSD (six bias ratios) with electropneumatic titanium-shafted shifting, Hoosier 20.5x7x13 slicks on magnesium-center Keizer 13-inch rims, and PS1 Wilwood disc brakes on CNC 6351 T6 aluminum uprights..",
            detailedSpecs: {
                chassis: "Front and rear single piece tubular space frame and fusion Welding ER70-S6filler with chromoly 4130 steel and FRP body",
                body: "",
                brakes: "Front and rear rotors have a disc brake system with PS1 Wilwood calipers, an upright assembly of CNC 6351 T6 with an Al, Integral caliper and wheel speed sensor mount",
                tires: "Hoosier 20.5 × 7 × 13 racing slicks mounted on 13-inch Aluminum Rim – Magnesium center Keizer wheels.",
                transmission: "6-speed sequential gearbox with Drexler clutch-pack type limited slip differential featuring six torque biasing ratios, and electropneumatic clutching and shifting with titanium driveshafts.",
                electronics: "",
                suspension: "Suspension Type is a  double unequal length A-Arm and push rod actuated horizontally oriented spring and damper with front wheel Rate 14.86 N/mm and rear wheel rate 26.41N/mm with motion ratio as progressive type",
                ergonomics: "Fixed seat and steering wheel with fore-aft pedal adjustment of 25 mm, wet lay-up carbon seat with padded lumbar and knee protection, 60 mm Ethafoam head support, and 210-degree side visibility.",
        }
    },  
        achievements: {
            rank: "27TH in FS Austria",
            highlight: "4th in Cost Event",
            points: "17 in Business Plan Presentation",
            teamPhoto: "./team/team10.jpeg",
            awards: [
                { title: "Overall FS Austria", value: "#27" },
                { title: "Cost Event", value: "#4" },
                { title: "Engineering Design", value: "#25" },
                { title: "Business Plan Presentation", value: "#17" },

            ]
        },
        members: { 
            board: [],
            core: [],
            general: [
                { id: 0, name: "Pradeep Pandunagri", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/pradeepvpandurangi/?originalSubdomain=in" } },
                { id: 1, name: "Anirudh Raut", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/anirudh-raut-a1654318/?originalSubdomain=in" } },
                { id: 2, name: "Vaibhav Kumar", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/vaibhavbkumar/" } },
                { id: 3, name: "Aaditya Agarwal", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 4, name: "Pratik Kumar Shukla", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/pratik-kumar-shukla/?originalSubdomain=in" } },
                { id: 5, name: "Moses Pezarkar", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/moses-pezarkar-0b7a0935/" } },
                { id: 6, name: "Ananth Raghavan Subramanian", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/ananth5/" } },
                { id: 7, name: "Manan Gupta", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/manan-gupta-61b84418/" } },
                { id: 8, name: "Viren Bhanot", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 9, name: "Shekhar Jha", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/shekharkjha/" } },
                { id: 10, name: "Akshat Gattani", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/akshatgattani/" } },
                { id: 11, name: "Mohit Khurana", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/mohit-khurana-79a46940/" } },
                { id: 12, name: "Siddhant Kapoor", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/siddhant-kapoor-5ab18b3b/" } },
                { id: 13, name: "Arnab Singh", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/arnabsingh/" } },
                { id: 14, name: "Akshay Sethi", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/asethi100/" } },
                { id: 15, name: "Kartik Sahu", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/kartik-sahu-a3954219/" } },
                { id: 16, name: "Tushar Gupta", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/tushar-gupta-6aa09940/" } },
                { id: 17, name: "Aditya Prasad", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/asprasad27/detail/contact-info/" } },
                { id: 18, name: "Satyajeet Pisda", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/satyajeet-pisda-88129113" } },
                { id: 19, name: "Anshuman Singh", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/anshuman-singh-439b883b/" } },
                { id: 20, name: "Nishad Sabnis", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/nishadsabnis/" } },
                { id: 21, name: "Rajat Patra", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/rajat-patra-53502397/" } },
                { id: 22, name: "Suyash Bhartiya", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 23, name: "Apurva Agarwal", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/apurvavagarwal/" } },
                { id: 24, name: "Deepak Atal", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/deepakatal/" } }
                ],
            },
    },
    "2009-2010": {
       car: {
            name: "FM09",
            competitionCode:"146",
            type:"CV",
            customStat1: { label: "FS UK", value: "65"},
            customStat2: { label: "Cost Event", value: "10" },
            engine: "HONDA CBR600 F4i",
            displacement:"",
            induction:'',
            powerOutput:'',
            image:'./cars/FM09.jpg',
            description: "The FM09 blazed our team's trailblazing spirit, powered by a Honda CBR600 F4i engine channeling raw fury through an FEA-optimized mild steel spaceframe (26.7mm x 2.87mm tubes, 2400 Nm/° torsional stiffness) with CNC-bent hoops and TIG welds. It braked to 1.2g with hydraulic Fiero F2 calipers on 260/230mm alloy rotors, gripped via Hoosier 20.5x7x13 slicks on magnesium-center Keizer 13-inch rims, and shifted seamlessly with a custom torque-biasing LSD and chain-sprocket drive.",
            detailedSpecs: {
                chassis: "FEA-optimized mild steel space frame with CNC-bent roll hoops and TIG welding. Tubes: 26.7 mm × 2.87 mm; Torsional Stiffness: 2400 Nm/°",
                body: "",
                brakes: "1.2g maximum deceleration with outboard alloy brake discs, hydraulic actuation, 260mm front and 230mm rear rotors, and Fiero F2 calipers.**",
                tires: "Hoosier 20.5 × 7 × 13 racing slicks mounted on 13-inch Aluminum Rim – Magnesium center Keizer wheels.",
                transmission: "Torque-biasing limited-slip differential with custom-built housing and a chain–sprocket final drive system.",
                electronics: "DynoJet Power Commander piggyback ECU with Compact RIO–LabVIEW–based data acquisition system.",
                suspension: "**1700 mm wheelbase, 1300 mm front and 1250 mm rear track widths, rack-and-pinion steering with 78% Ackermann, a 10:1 gear ratio, and 70 mm steering arm length.",
                ergonomics: "Fixed seat and steering wheel with fore-aft pedal adjustment of 25 mm, wet lay-up carbon seat with padded lumbar and knee protection, 60 mm Ethafoam head support, and 210-degree side visibility.",
        }
    },  
        achievements: {
            rank: "65th in FS UK",
            highlight: "10 in Cost Event in FS UK",
            points: "59 in Business Plan Presentation",
            teamPhoto: "./team/team09.jpeg",
            awards: [
                { title: "Overall FS Germany", value: "#65" },
                { title: "Engineering Design", value: "#62" },
            ]
        },
       members: { 
            board: [],
            core: [],
            general: [
                { id: 0, name: "Pratik Kumar Shukla", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/pratik-kumar-shukla/?originalSubdomain=in" } },
                { id: 1, name: "Moses Pezarkar", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/moses-pezarkar-0b7a0935/" } },
                { id: 2, name: "Maurya Modi", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/mauryamodi/" } },
                { id: 3, name: "Hiren Vara", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/varahiren/?originalSubdomain=ke" } },
                { id: 4, name: "Sumit Saurav", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/sumit-saurav-99b3a919/?originalSubdomain=in" } },
                { id: 5, name: "Siddharth Sonti", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/siddharth-sonti-609a6510/?originalSubdomain=in" } },
                { id: 6, name: "Utsav Drolia", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/utsav-drolia/" } },
                { id: 7, name: "Aamil Raza", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/aamilrazashakri/?originalSubdomain=ro" } },
                { id: 8, name: "Avinash Kulkarni", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/avinaashk/?originalSubdomain=uk" } },
                { id: 9, name: "Ruchir Gupta", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/guptaruchir/" } },
                { id: 10, name: "Chandan Meharia", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/chandan-meharia-58575430/" } },
                { id: 11, name: "Saras Satyam", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/saras-satyam-07677018/?originalSubdomain=in" } },
                { id: 12, name: "Allen George", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/allen-george/?originalSubdomain=de" } },
                { id: 13, name: "Gagandeep Singh Lamba", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/gagandeepsl/?originalSubdomain=ca" } },
                { id: 14, name: "Pradeep Pandurangi", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/pradeepvpandurangi/?originalSubdomain=in" } },
                { id: 15, name: "Anirudh Raut", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/anirudh-raut-a1654318/?originalSubdomain=in" } },
                { id: 16, name: "Aaditya Agarwal", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 17, name: "Lokesh Patil", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/lokeshpatil/" } },
                { id: 18, name: "Nishant Jain", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 19, name: "Rahul Verma", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/rahulashley/" } },
                { id: 20, name: "Sambhav Gupta", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/sambhavg/" } },
                { id: 21, name: "Ritayan Chatterjee", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/ritayanchatterjee/" } },
                { id: 22, name: "Viren Bhanot", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 23, name: "Anant Mittal", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/anantmithal/" } },
                { id: 24, name: "Vaibhav Kumar", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/vaibhavbkumar/" } },
                { id: 25, name: "Vikash Balasubramanium", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/vikash-balasubramanian/" } },
                { id: 26, name: "Manan Gupta", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/manan-gupta-61b84418/" } },
                { id: 27, name: "Ananth Ragavan Subramanian", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/ananth5/" } },
                { id: 28, name: "Roshan S.", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 29, name: "Atul Kumar Singh", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/atul-kumar-singh-71b49272/" } },
                { id: 30, name: "Shadab Khan", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/skhanshadab/" } }
                ],
            },
    },
    "2008-2009": {
            car: {
            name: "FM08",
            competitionCode:"96",
            type:"CV",
            customStat1: { label: "FS Italy", value: "27"},
            customStat2: { label: "Cost Event", value: "17" },
            engine: "HONDA CBR600 F4i",
            displacement:"",
            induction:'',
            powerOutput:'',
            image:'./cars/FM08.jpg',
            description: "The FM08 accelerated our team's ascent, channeling the Honda CBR600 F4i's unbridled power through an FEA-optimized mild steel spaceframe with CNC-bent hoops and TIG welds. It halted at 1.2g with hydraulic Fiero F2 calipers clamping 260/230mm alloy rotors, clawed tracks via Hoosier 20.5x7x13 slicks on magnesium-center Keizer 13-inch rims, and biased torque through a custom-housed LSD with chain-sprocket drive.",
            detailedSpecs: {
                chassis: "FEA-optimized mild steel space frame with CNC-bent roll hoops and TIG welding.",
                body: "",
                brakes: "1.2g maximum deceleration with outboard alloy brake discs, hydraulic actuation, 260mm front and 230mm rear rotors, and Fiero F2 calipers.**",
                tires: "Hoosier 20.5 × 7 × 13 racing slicks mounted on 13-inch Aluminum Rim – Magnesium center Keizer wheels.",
                transmission: "Torque-biasing limited-slip differential with custom-built housing and a chain–sprocket final drive system.",
                electronics: "DynoJet Power Commander piggyback ECU with Compact RIO–LabVIEW–based data acquisition system.",
                suspension: "Unequal non-parallel A-arm suspension with pushrod actuation, Jupiter V dampers (400 lb/in, 2-way adjustable), and a customized TRW steering assembly. ",
                ergonomics: "Fixed seat and steering wheel with fore-aft pedal adjustment of 25 mm, wet lay-up carbon seat with padded lumbar and knee protection, 60 mm Ethafoam head support, and 210-degree side visibility.",
        }
    },  
        achievements: {
            rank: "27th in FS Italy",
            highlight: "17 in Cost Event in FS Italy",
            points: "14 in Business Plan Presentation",
            teamPhoto: "./team/team08.jpeg",
            awards: [
                { title: "Overall FS Italy", value: "#27" },
                { title: "Engineering Design", value: "#29" },
                { title: "Autocross", value: "#25" },
            ]
        },
        members: { 
            board: [],
            core: [],
            general: [
                { id: 0, name: "Kaushik Mani", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/kaushik-mani-970b57b" } },
                { id: 1, name: "Shelav Jain", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/shelavjain/" } },
                { id: 2, name: "Vineet Jain", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } }, // FB only
                { id: 3, name: "Siddhartha Jain", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 4, name: "Arjun Divakera", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/arjun-divakera-9b677b42/" } },
                { id: 5, name: "Ankit Banka", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/ankit-banka-9a453316/" } },
                { id: 6, name: "Srikanth", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 7, name: "Ratnesh Kumar", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "#" } },
                { id: 8, name: "Aditya Raghunandan", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/aditya-raghunandan-17322b20/" } },
                { id: 9, name: "Nishant Jain", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/nishant-jain-13798022/" } },
                { id: 10, name: "Sagnik Niyogi", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/sagnikniyogi/?originalSubdomain=in" } },
                { id: 11, name: "Eklavya Singh", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/eklavyasingh/" } },
                { id: 12, name: "Rachit Mathur", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/rachitmathur88/" } },
                { id: 13, name: "Aayush Gupta", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/aayush-gupta-91027a14/?originalSubdomain=in" } },
                { id: 14, name: "Dhawal Bavishi", role: "", department: "Combustion", quote: "", image: "./fm_sr/place.jpeg", socials: { linkedin: "https://www.linkedin.com/in/dbavishi/" } }
                ],
            },
    },
};

export const sponsors: Sponsor[] = [
    { name: "MAHE", url: "https://www.manipal.edu/mit.html",image:'./sponsors/mahe_logo.png', description: "Manipal Academy of Higher Education (MAHE), located in Manipal, Karnataka, is one of India's leading private universities. Established in 1953, MAHE offers a wide range of undergraduate, postgraduate, and doctoral programs across various disciplines such as engineering, medicine, management, humanities, and social sciences. The university is known for its excellent academic standards, world-class infrastructure, and state-of-the-art research facilities." },
    { name: "BATEMO", url: "https://www.batemo.com/",image:'./sponsors/batemo.png', description: "Batemo specializes in high-precision simulation software for lithium-ion batteries, they create physical models and help with challenges faced in battery development. They have also partnered with online simulation environments like MATLAB, AVL Cruise etc., to implement design and develop physical battery models using the data in their battery library." },
    { name: "STYRENIX", url: "https://styrenix.com/", image:'./sponsors/styrenix.png',description: "Styrenix is a leading manufacturer of high-performance styrenic polymers, offering innovative material solutions for various industries such as automotive, electronics, and healthcare. With a strong focus on sustainability and advanced polymer technologies, Styrenix develops customized products that enhance durability, performance, and design flexibility." },
     { name: "EPLAN", url: "https://www.eplan-software.com/", image:'./sponsors/eplan.png', description: "EPLAN is a global leader in electrical engineering software, providing cutting-edge solutions for designing and automating electrical, fluid, and control systems. Their platform streamlines the entire engineering process, enabling seamless collaboration across industries such as automotive, energy, and industrial automation." },
     { name: "TEAL", url: "https://www.titanteal.com/",image:'./sponsors/teal.png',description: "We're deeply grateful to Titan Engineering & Automation Limited for their generous sponsorship. Their support is invaluable in helping us reach new milestones and inspiring our team. Specializing in high-precision component manufacturing and designing and automation machine manufacturing, TEAL's journey from inception to expansion epitomizes innovation and excellence—qualities we aspire to emulate." },
    { name: "ANALOG DEVICES", url: "https://www.analog.com/en/index.html",image:'./sponsors/analog.png',  description: "Analog Devices is a global leader in high-performance signal processing technology, delivering innovative solutions that bridge the physical and digital worlds. Renowned for its precision, reliability, and advanced engineering, Analog Devices offers a wide range of products, including sensors, data converters, and power management systems." },
    { name: "EBLU", url: "https://www.eblu.in/",  image:'./sponsors/eblu_logo.png',description: "" },
   { name: "TOOLCON SYSTEMS", url: "https://www.toolcon.com/", image:'./sponsors/toolcon.png', description: "" },
    {name : "FESTO", url:"https://www.festo.com/in/en/",image:"./sponsors/festo.png",description:""}, 
    {name : "VECMOCON", url:"https://vecmocon.com/",image:"./sponsors/vecmoccon.png",description:""},
    { name: "ADOR", url: "https://www.adorindia.com/", image:'./sponsors/ador_logo.png', description: "" },
     { name: "AMADA", url: "https://www.amadaindia.co.in/", image:'./sponsors/amada.png', description: "" },
     { name: "SIKA", url: "https://ind.sika.com/",image:'./sponsors/sika_logo.png', description: "" },
     {name : "BENDER", url:"",image:"./sponsors/bender.png",description:""},
    { name: "FLUKE", url: "https://www.fluke.com/en-in", image:'./sponsors/fluke_logo.png', description: "" },
    { name: "RHEINMETALL", url: "https://www.rheinmetall.com/en", image:'./sponsors/rheinmetall.png', description: "" },
    {name : "CHASSISSIM", url:"https://www.chassissim.com/",image:"./sponsors/chassism_logo.png",description:""},
    {name : "BHOR", url:"https://bhor.com/",image:"./sponsors/bhor.png",description:""},
    {name : "M2M ", url:"https://www.m2mrepairs.in/",image:"./sponsors/m2m.png",description:""},
    {name : "EV TECH", url:"https://evtechnews.in/",image:"./sponsors/ev_tech.png",description:""},
    {name : "LPS BOSSARD", url:"https://www.bossard.com/in-en/about-us/bossard-india/",image:"./sponsors/lps.png",description:""},
    { name: "LA DIVITA", url: "https://www.instagram.com/ladolcevita_vadodara/?hl=en", image:'./sponsors/la.png',description: "" },
    {name : "EV REPORTER", url:"https://evreporter.com/",image:"./sponsors/evreporter.png",description:""},
    {name : "NORTON", url:"https://www.nortonabrasives.com/en-us/product/abrasives/sandpaper-rolls",image:"./sponsors/norton.png",description:""},
    {name : "WAGH BAKRI", url:"https://www.waghbakritea.com/",image:"./sponsors/wagh.png",description:""},
    {name : "ANSYS", url:"http://ansys.com/en-in",image:"./sponsors/ansys.png",description:""},
    {name : "DASSAULT SYSTEMS", url:"https://www.3ds.com/",image:"./sponsors/dassault.png",description:""},
    {name : "MEKUVA", url:"https://mekuva.com/",image:"./sponsors/mekuva.png",description:""},
    {name : "FLAUTA", url:"https://www.flautacustoms.com/",image:"./sponsors/flauta.png",description:""},
    {name : "STATUS FURNITURE", url:"https://statusfurniture.in/",image:"./sponsors/status.png",description:""},
    {name : "PPI", url:"",image:"./sponsors/ppi.png",description:""},
    {name : "AFLON ENGINEERING", url:"https://www.aflonindia.com/",image:"./sponsors/aflon.png",description:""},
    {name : "BANGALORE MIRROR", url:"https://bangaloremirror.indiatimes.com/",image:"./sponsors/blr.png",description:""},
    {name : "INSTITUITIONS INNOVATION COUNCIL", url:"https://iic.mic.gov.in/assets/html/index.html",image:"./sponsors/iic.png",description:""},
   


];
export const newspaperClippings = [
    { title: "India's student led EV engineering", date: "Nov 2025", image: "./covers/evtech.png", link: "https://evreporter.com/formula-manipals-transition-to-electric-mobility-a-deep-dive-into-indias-student-led-ev-engineering/" },
    { title: "Grit, Grind, Glory: Inside Formula Manipal", date: "July 2025", image: "./covers/evreporter.png", link: "https://evtechnews.in/grit-grind-glory-inside-formula-manipal/" },
    { title: "Formula Manipal shifts gears with electric vehicle success", date: "Nov 2025", image: "./covers/blr.png", link: "https://epaper.indiatimes.com/timesepaper/publication-mirror,city-mumbai.cms" },
]

export const magazines = [
    { month: "September", year: "2025", cover: "./covers/september.png",websiteUrl: "https://online.fliphtml5.com/czvap/rrxu/#p=1", pdfUrl: "./magazine/j25.pdf" },
    { month: "August", year: "2025", cover: "./covers/august.png",websiteUrl: "https://online.fliphtml5.com/czvap/kgsd/#p=1", pdfUrl: "./magazine/august25.pdf" },
    {month: "July", year: "2025", cover: "./covers/july.png",websiteUrl: "https://online.fliphtml5.com/czvap/errz/#p=1", pdfUrl: "./magazine/july25.pdf" },
    {month: "June", year: "2025", cover: "./covers/june.png", websiteUrl: "https://online.fliphtml5.com/czvap/itla/#p=1",pdfUrl: "./magazine/june25.pdf" },
    {month: "May", year: "2025", cover: "./covers/may.png", websiteUrl: "https://online.fliphtml5.com/czvap/ljzs/#p=1",pdfUrl: "./magazine/may25.pdf" },
    {month: "April", year: "2025", cover: "./covers/april.png",websiteUrl: "https://online.fliphtml5.com/czvap/azcz/#p=1", pdfUrl: "./magazine/april25.pdf" },
    {month: "March", year: "2025", cover: "./covers/march.png", websiteUrl: "https://online.fliphtml5.com/czvap/jbms/#p=1",pdfUrl: "./magazine/march25.pdf" },
    {month: "February", year: "2025", cover: "./covers/feb.png",websiteUrl: "https://online.fliphtml5.com/czvap/cnsf/", pdfUrl: "./magazine/feb25.pdf" },
    {month: "January", year: "2025", cover: "./covers/jan.png", websiteUrl: "https://online.fliphtml5.com/czvap/sekd/#p=1",pdfUrl: "./magazine/jan25.pdf" },
];

export const contactDetails = {
    manager: {
        name: "Amogha Rao",
        phone: "+91 99865 07801",
        email: "formulamanipal@manipal.edu"
    },
    socials: [
        { icon: "fab fa-instagram", link: "https://www.instagram.com/formulamanipal/" },
        { icon: "fab fa-facebook", link: "https://www.facebook.com/FormulaManipal/" },
        { icon: "fab fa-linkedin", link: "https://www.linkedin.com/company/formulamanipal/posts/?feedView=all" },
        { icon: "fab fa-youtube", link: "https://www.youtube.com/user/formulamanipal96" },
        { icon: "fab fa-twitter", link: "https://x.com/formulamanipal?lang=en" }
    ]
};

export const subsystems: Subsystem[] = [
    {
        name: "Structures",
        description: "The backbone of the car, ensuring rigidity and safety under extreme loads.",
        research: "Researching carbon-fiber monocoque manufacturing techniques."
    },
    {
        name: "Aerodynamics & Composites",
        description: "Manipulating airflow to generate downforce and minimize drag.",
        research: "Actuated Drag Reduction System and aeropackage design optimization and manufacturing.",
},
    {
        name: "Vehicle Dynamics",
        description: "Optimizing suspension geometry and tire utilization for peak handling.",
        research: "Data acquisition and decoupled suspension."
    },
    {
        name: "Transmission",
        description: "Efficiently transferring power from the engine to the wheels.",
        research: "Stepped planetary gearbox design and developing effective sealing and lubrication solutions for high-performance operation."
    },
    {
        name: "E-Powertrain",
        description: "The Electric Powertrain sysbsytem is responsible for designing, optimizing, and managing the complete powertrain architecture of the vehicle.",
        research: "Researching on hub motors and regenerative breaking."
    },
    {
        name: "Electronics & Control Systems",
        description: "Manages all vehicle-level electronics, including sensor acquisition, safety interlocks, HV/LV monitoring, and CAN-based coordination.",
        research: "Currently researching custom on AMS design and advanced data acquisition architecture"
    },
    {
        name: "Driverless",
        description: "Pioneering autonomous racing with advanced perception and path planning.",
        research: "Enhancing Model-Based Reinforcement Learning with Closed Form Continuous Time Neural Networks for High-Speed Autonomous Vehicle Dynamics",
    },
    {
        name: "Management",
        description: "Ensuring logistics, finances, and marketing drive the team forward.",
        research: "N/A"
    }
];