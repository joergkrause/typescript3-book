class Widget {
  render(container: HTMLElement): string{
    return container.outerHTML;
  }
} 

export const widget = new Widget();
