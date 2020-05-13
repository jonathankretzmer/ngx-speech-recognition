export type SpeechGrammarListType = SpeechGrammarList;
export type SpeechRecognitionServiceEvent = Event | SpeechRecognitionEvent;

export interface SpeechRecognitionError extends Event {
  error: string;
  message: string;
}
