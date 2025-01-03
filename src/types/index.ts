// src/types/index.ts
export interface User {
    _id: string;
    name: string;
    email: string;
    image?: string;
  }
  
  export interface Period {
    subject: string;
    startTime: string;
    endTime: string;
    teacher: string;
    happened?: boolean;
    attended?: boolean;
    disabled?: boolean;
    topicsCovered?: string;
    date:Date;
    temporaryExchange: {
      originalSubject: string;
      exchangeEndDate: Date;
    } | null;
  }
  
  export interface allClasses {
    date: Date;
    startTime: string;
    endTime: string;
    isHoliday: boolean;
    happened: boolean;
    attended: boolean;
    topicsCovered: string[];
    temporarySubject: string | null;
    exchangeEndDate: Date | null;
  }
  
  export interface DaySchedule {
    date: Date;
    day: string;
    periods: Period[];
    isHoliday?: boolean;
  }

  export interface Preset {
    _id: string;
    name: string;
    description?: string;
    schedule: {
      day: string;
      periods: {
        subject: string;
        startTime: string;
        endTime: string;
        teacher: string;
      }[];
    }[];
    isDefault?: boolean;
    createdBy: string;
    createdAt?: Date;
    updatedAt?: Date;
  }

  export interface SubjectInfo {
    name: string;
    allclasses: allClasses[];
    allHappened: number;
    allAttended: number;
  }

  export interface ClassEntry {
    date: string | Date;
    attended: boolean;
    isHoliday: boolean;
    happened: boolean;
}

  export interface ClassInfoInterface {

    _id: string;
    name:string;
    userId: string;
    subject: SubjectInfo[];
    createdAt?: Date;
    updatedAt?: Date;
    date: Date;
    startTime: string;
    endTime: string;
    isHoliday: boolean;
    happened: boolean;
    attended: boolean;
    topicsCovered: string[];
    temporarySubject: string | null;
    exchangeEndDate: Date | null;
  }

