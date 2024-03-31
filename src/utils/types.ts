export type Dua={
   id: number;
   cat_id: number;
   subcat_id: number;
   dua_id: number;
   dua_name: string;
   top: string | null;
   dua_arabic?: string | null;
   transliteration?: string | null;
   dua_indopak?: string | null;
   translation: string | null;
   bottom?: string | null;
   refference?: string | null;
   audio: string | null;
 }
 export type AllDuas = Dua[]