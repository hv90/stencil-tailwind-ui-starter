import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('my-component', () => {
  it('should toggle isOpen state on button click', async () => {
    const page = await newSpecPage({
      components: [MyComponent],
      html: `<my-component></my-component>`,
    });

    const button = page.root.querySelector('button#toggleMenu') as HTMLButtonElement;

    const instance = page.rootInstance;
    const toggleSpy = jest.spyOn(instance, 'toggleMenu');

    // Verifica o estado inicial
    expect(instance.isOpen).toBe(false);

    // Simula o clique no botão
    button.click();
    await page.waitForChanges(); // Espera as mudanças refletirem no DOM

    // Verifica se o estado foi alterado
    expect(toggleSpy).toHaveBeenCalled(); 
    expect(toggleSpy).toHaveBeenCalledTimes(1);

    expect(instance.isOpen).toBe(true);

    // Simula outro clique para alternar novamente
    // button.click();
    document.body.click();
    await page.waitForChanges();

    // Verifica se o estado foi revertido
    expect(toggleSpy).toHaveBeenCalledTimes(2);
    expect(instance.isOpen).toBe(false);
  });

  // it('renders', async () => {
  //   const { root } = await newSpecPage({
  //     components: [MyComponent],
  //     html: '<my-component></my-component>',
  //   });
  //   expect(root).toEqualHtml(`
  //     <my-component>
  //       <mock:shadow-root>
  //         <div>
  //           Hello, World! I'm
  //         </div>
  //       </mock:shadow-root>
  //     </my-component>
  //   `);
  // });

  // it('renders with values', async () => {
  //   const { root } = await newSpecPage({
  //     components: [MyComponent],
  //     html: `<my-component first="Stencil" middle="'Don't call me a framework'" last="JS"></my-component>`,
  //   });
  //   expect(root).toEqualHtml(`
  //     <my-component first="Stencil" middle="'Don't call me a framework'" last="JS">
  //       <mock:shadow-root>
  //         <div>
  //           Hello, World! I'm Stencil 'Don't call me a framework' JS
  //         </div>
  //       </mock:shadow-root>
  //     </my-component>
  //   `);
  // });
});
