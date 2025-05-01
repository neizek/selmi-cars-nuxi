export interface Image {
	id: number;
	s240FileId: number;
	s720FileId: number;
	s480FileId: number;
	s1080FileId: number;
}

export interface File {
	url: string;
	mimeType: string;
	size: number;
}
