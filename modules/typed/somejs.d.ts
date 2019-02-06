/**
 * Some very simple timer API.
 */
export interface timer {
  
  /**
   * Execute a function with delay.
   * @param callback The function itself
   */
  execute(callback: Function): void;

  /**
   * Set the value
   * @param value Next duration in ms
   */
  duration(value: number);
  /**
   * Return the current value
   */
  duration(): number;
  
}
